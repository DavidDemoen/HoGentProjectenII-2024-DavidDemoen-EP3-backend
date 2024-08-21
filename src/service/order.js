const {
  Order,
  OrderItem,
  Product,
  Address,
  Account,
} = require("../data/models");
const ServiceError = require("../core/serviceError");
const handleDBError = require("./_handleDBError");
const { Op } = require("sequelize");
const sequelize = require("sequelize");

// GET /orders
const getAll = async (filters) => {
  const {
    sellerCompanyId,
    buyerAccountId,
    buyerCompanyId,
    date,
    status,
    search,
    page,
    limit,
    sortBy,
    sortOrder,
    searchDate,
    searchReferenceId,
    searchBuyerAccountName,
    searchOrderStatusName,
  } = filters;

  const whereClause = {};

  if (sellerCompanyId) whereClause.sellerCompanyId = sellerCompanyId;
  if (buyerAccountId) whereClause.buyerAccountId = buyerAccountId;
  if (date) whereClause.date = new Date(date);
  if (status) whereClause.status = status;
  if (search) {
    whereClause[Op.or] = [
      { referenceId: { [Op.like]: `%${search}%` } },
      { $buyer_account_id$: { [Op.like]: `%${search}%` } },
    ];
  }
  if (searchDate) {
    whereClause[Op.or] = [{ date: { [Op.like]: `%${searchDate}%` } }];
  }
  if (searchReferenceId) {
    whereClause[Op.or] = [
      { referenceId: { [Op.like]: `%${searchReferenceId}%` } },
    ];
  }
  if (searchBuyerAccountName) {
    try {
      // Fetch accounts that match the search name
      const accounts = await Account.findAll({
        attributes: ["id"],
        where: sequelize.where(
          sequelize.fn(
            "concat",
            sequelize.col("first_name"),
            " ",
            sequelize.col("last_name")
          ),
          { [Op.like]: `%${searchBuyerAccountName}%` }
        ),
      });

      if (accounts.length > 0) {
        const accountIds = accounts.map((account) => account.id);
        whereClause.buyerAccountId = { [Op.in]: accountIds };
      } else {
        // If no accounts match, make sure to exclude all orders
        whereClause.buyerAccountId = { [Op.in]: [] };
      }
    } catch (error) {
      throw handleDBError(error);
    }
  }
  if (searchOrderStatusName) {
    whereClause[Op.or] = [
      { orderStatusName: { [Op.like]: `%${searchOrderStatusName}%` } },
    ];
  }

  if (buyerCompanyId) {
    try {
      const { orders: ordersByCompany } = await getByBuyerCompanyId(
        buyerCompanyId
      );

      if (ordersByCompany && ordersByCompany.length > 0) {
        const orderIds = ordersByCompany.map((order) => order.id);
        whereClause.id = { [Op.in]: orderIds };
      } else {
        whereClause.id = { [Op.in]: [] };
      }
    } catch (error) {
      throw handleDBError(error);
    }
  }

  try {
    const totalCount = await Order.count({ where: whereClause });

    const orders = await Order.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: OrderItem,
          as: "order_items",
          include: [{ model: Product, as: "product" }],
        },
        { model: Address, as: "shipping_address" },
        { model: Address, as: "billing_address" },
        { model: Account, as: "buyer_account" },
      ],
      limit,
      offset: (page - 1) * limit,
      order: [[sortBy, sortOrder]],
    });

    return {
      orders: orders.rows,
      count: totalCount,
      totalItems: totalCount,
      pagination: {
        totalItems: totalCount,
        page,
        limit,
        pages: Math.ceil(orders.count / limit),
      },
    };
  } catch (error) {
    throw handleDBError(error);
  }

  // try {
  //   const orders = await Order.findAll();
  //   return { orders, count: orders.length };
  // } catch (error) {
  //   console.error(error);
  // }
};

const getById = async (id) => {
  try {
    const order = await Order.findByPk(id, {
      include: [
        {
          model: OrderItem,
          as: "order_items",
          include: [
            {
              model: Product,
              as: "product",
            },
          ],
        },
        {
          model: Address,
          as: "shipping_address",
        },
        {
          model: Address,
          as: "billing_address",
        },
        {
          model: Account,
          as: "buyer_account",
        },
      ],
    });
    if (!order) {
      throw new Error("Order not found");
    }
    return { order };
  } catch (error) {
    console.error(error);
  }
};
const getBySellerCompanyId = async (sellerCompanyId) => {
  try {
    const orders = await Order.findAll({
      where: { sellerCompanyId },
      include: [
        {
          model: OrderItem,
          as: "order_items",
          include: [
            {
              model: Product,
              as: "product",
            },
          ],
        },
      ],
    });
    if (orders.length === 0) {
      return { message: "No orders found" };
    }
    return { orders, count: orders.length };
  } catch (error) {
    console.error(error);
  }
};
const getBySellerCompanyIdToday = async (sellerCompanyId) => {
  const { orders } = await getBySellerCompanyId(sellerCompanyId);
  const today = new Date();
  const todayOrders = orders.filter(
    (order) => order.date.getDate() === today.getDate()
  );
  if (todayOrders.length === 0) {
    return { message: "No orders found today" };
  }
  return { orders: todayOrders, count: todayOrders.length };
};
const getBySellerCompanyIdWeek = async (sellerCompanyId) => {
  const { orders } = await getBySellerCompanyId(sellerCompanyId);
  const today = new Date();
  const weekOrders = orders.filter(
    (order) => order.date.getDate() >= today.getDate() - 7
  );
  if (weekOrders.length === 0) {
    return { message: "No orders found this week" };
  }
  return { orders: weekOrders, count: weekOrders.length };
};
const getBySellerCompanyIdRevenueToday = async (sellerCompanyId) => {
  const { orders } = await getBySellerCompanyIdToday(sellerCompanyId);
  return { revenue: getRevenueFromOrders(orders), count: orders.length };
};
const getBySellerCompanyIdRevenueWeek = async (sellerCompanyId) => {
  const { orders } = await getBySellerCompanyIdWeek(sellerCompanyId);
  return { revenue: getRevenueFromOrders(orders), count: orders.length };
};
const getByBuyerAccountId = async (buyerAccountId) => {
  try {
    const orders = await Order.findAll({
      where: { buyerAccountId },
      include: [
        {
          model: OrderItem,
          as: "order_items",
          include: [
            {
              model: Product,
              as: "product",
            },
          ],
        },
      ],
    });
    if (orders.length === 0) {
      return { message: "No orders found" };
    }
    return { orders, count: orders.length };
  } catch (error) {
    console.error(error);
  }
};
const getByBuyerCompanyId = async (buyerCompanyId) => {
  try {
    const buyerAccounts = await Account.findAll({
      where: { companyId: buyerCompanyId, accountTypeName: "PURCHASER" },
    });
    const buyerAccountsIds = buyerAccounts.map((account) => account.id);
    const ordersCompany = [];
    for (const buyerAccountId of buyerAccountsIds) {
      const { orders } = await getByBuyerAccountId(buyerAccountId);
      if (orders && orders.length > 0) {
        ordersCompany.push(...orders);
      }

      //return orders;
    }
    return { orders: ordersCompany, count: ordersCompany.length };
  } catch (error) {
    throw handleDBError(error);
  }
};

// CREATE /orders
const create = async (order) => {
  const { shippingAddress, billingAddress, cartItems } = order;
  const shippingAddressId = await getAddressId(shippingAddress);
  const billingAddressId = await getAddressId(billingAddress);
  order.shippingAddressId = shippingAddressId;
  order.billingAddressId = billingAddressId;
  console.log(cartItems);
  try {
    const newOrder = await Order.create(order);
    console.log(`Order created with id ${newOrder.id}`);
    cartItems.forEach(async (cartItem) => {
      const {
        product: { id: productId },
        product: { currentUnitPrice: transactionUnitPrice },
        product: { currentProductDiscount: transactionDiscount },
        quantity,
      } = cartItem;
      await OrderItem.create({
        orderId: newOrder.id,
        productId,
        transactionUnitPrice,
        transactionDiscount,
        quantity,
      });
    });
    return newOrder;
  } catch (error) {
    console.error(error);
  }
};

// UPDATE /orders

const updateById = async (id, order) => {
  try {
    const updatedOrder = await Order.update(order, {
      where: { id },
    });
    if (updatedOrder[0] === 0) {
      throw new ServiceError.notFound(`Order with id ${id} not found`, { id });
    }
    return getById(id);
  } catch (error) {
    throw handleDBError(error);
  }
};

// AUXILIARY FUNCTIONS
const getRevenueFromOrders = (orders) => {
  return orders.reduce((totalRevenue, order) => {
    const orderRevenue = getRevenueFromOrder(order);
    return totalRevenue + orderRevenue;
  }, 0);
};
const getRevenueFromOrder = (order) => {
  const orderRevenueWithoutDiscount = order.order_items.reduce(
    (itemsRevenue, orderItem) => {
      const itemTotal =
        orderItem.quantity *
        orderItem.transactionUnitPrice *
        (1 - orderItem.transactionDiscount);

      return itemsRevenue + itemTotal;
    },
    0
  );
  return orderRevenueWithoutDiscount * (1 - order.orderDiscount);
};
const getAddressId = async (address) => {
  const { street, number, postalCode, city, country } = address;
  try {
    const existingAddress = await Address.findOne({
      where: { street, number, postalCode, city, country },
    });
    if (existingAddress) {
      return existingAddress.id;
    }
    const newAddress = await Address.create({
      street,
      number,
      postalCode,
      city,
      country,
    });
    return newAddress.id;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAll,
  getById,
  getBySellerCompanyId,
  getBySellerCompanyIdToday,
  getBySellerCompanyIdWeek,
  getBySellerCompanyIdRevenueToday,
  getBySellerCompanyIdRevenueWeek,
  getByBuyerAccountId,
  getByBuyerCompanyId,
  create,
  updateById,
};

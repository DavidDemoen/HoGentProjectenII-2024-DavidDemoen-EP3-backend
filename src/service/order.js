const { Order, OrderItem, Product } = require("../data/models");

// GET /orders
const getAll = async () => {
  try {
    const orders = await Order.findAll();
    return { orders, count: orders.length };
  } catch (error) {
    console.error(error);
  }
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
      ],
    });
    if (!order) {
      throw new Error("Order not found");
    }
    return order;
  } catch (error) {
    console.error(error);
  }
};
const getBySellerAccountId = async (sellerAccountId) => {
  try {
    const orders = await Order.findAll({
      where: { sellerAccountId },
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
const getBySellerAccountIdToday = async (sellerAccountId) => {
  const { orders } = await getBySellerAccountId(sellerAccountId);
  const today = new Date();
  const todayOrders = orders.filter(
    (order) => order.date.getDate() === today.getDate()
  );
  if (todayOrders.length === 0) {
    return { message: "No orders found today" };
  }
  return { orders: todayOrders, count: todayOrders.length };
};
const getBySellerAccountIdWeek = async (sellerAccountId) => {
  const { orders } = await getBySellerAccountId(sellerAccountId);
  const today = new Date();
  const weekOrders = orders.filter(
    (order) => order.date.getDate() >= today.getDate() - 7
  );
  if (weekOrders.length === 0) {
    return { message: "No orders found this week" };
  }
  return { orders: weekOrders, count: weekOrders.length };
};
const getBySellerAccountIdRevenueToday = async (sellerAccountId) => {
  const { orders } = await getBySellerAccountIdToday(sellerAccountId);
  return { revenue: getRevenueFromOrders(orders), count: orders.length };
};
const getBySellerAccountIdRevenueWeek = async (sellerAccountId) => {
  const { orders } = await getBySellerAccountIdWeek(sellerAccountId);
  return { revenue: getRevenueFromOrders(orders), count: orders.length };
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

module.exports = {
  getAll,
  getById,
  getBySellerAccountId,
  getBySellerAccountIdToday,
  getBySellerAccountIdWeek,
  getBySellerAccountIdRevenueToday,
  getBySellerAccountIdRevenueWeek,
};

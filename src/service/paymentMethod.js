const { PaymentMethod } = require("../data/models");

const getAll = async () => {
  try {
    const paymentMethods = await PaymentMethod.findAll();
    if (paymentMethods.length === 0) {
      return { message: "No payment methods found" };
    }
    return { paymentMethods, count: paymentMethods.length };
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAll,
};

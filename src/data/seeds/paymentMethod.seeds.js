const { PaymentMethod } = require("../models");

const paymentMethods = [
  {
    referenceId: "B2B-PM-0001",
    name: "CREDIT_CARD",
    description: "Pay with your credit card.",
  },
  {
    referenceId: "B2B-PM-0002",
    name: "BANK_TRANSFER",
    description: "Pay with a bank transfer.",
  },
  {
    referenceId: "B2B-PM-0003",
    name: "PAYPAL",
    description: "Pay using your PayPal account.",
  },
  {
    referenceId: "B2B-PM-0004",
    name: "CRYPTOCURRENCY",
    description: "Pay using cryptocurrency.",
  },
  {
    referenceId: "B2B-PM-0005",
    name: "APPLE_PAY",
    description: "Pay using Apple Pay.",
  },
  {
    referenceId: "B2B-PM-0006",
    name: "GOOGLE_PAY",
    description: "Pay using Google Pay.",
  },
  {
    referenceId: "B2B-PM-0007",
    name: "SAMSUNG_PAY",
    description: "Pay using Samsung Pay.",
  },
];

const seedPaymentMethods = () => PaymentMethod.bulkCreate(paymentMethods);

module.exports = { seedPaymentMethods };

const { PaymentStatus } = require("../models");

const paymentStatuses = [
  {
    referenceId: "B2B-PS-0001",
    name: "PENDING",
    description: "The payment is pending.",
  },
  {
    referenceId: "B2B-PS-0002",
    name: "PROCESSING",
    description: "The payment is being processed.",
  },
  {
    referenceId: "B2B-PS-0003",
    name: "PAID",
    description: "The payment has been paid.",
  },
  {
    referenceId: "B2B-PS-0004",
    name: "REFUNDED",
    description: "The payment has been refunded.",
  },
  {
    referenceId: "B2B-PS-0005",
    name: "CANCELLED",
    description: "The payment has been cancelled.",
  },
];

const seedPaymentStatuses = () => PaymentStatus.bulkCreate(paymentStatuses);

module.exports = { seedPaymentStatuses };

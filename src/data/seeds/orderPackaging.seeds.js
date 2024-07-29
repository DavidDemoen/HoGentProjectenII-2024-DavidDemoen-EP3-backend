const { OrderPackaging } = require("../models");

const orderPackagings = [
  {
    referenceId: "B2B-OP-0001",
    name: "BOX",
    description: "A box.",
  },
  {
    referenceId: "B2B-OP-0002",
    name: "ENVELOPE",
    description: "An envelope.",
  },
  {
    referenceId: "B2B-OP-0003",
    name: "PALLET",
    description: "A pallet.",
  },
  {
    referenceId: "B2B-OP-0004",
    name: "CRATE",
    description: "A crate.",
  },
  {
    referenceId: "B2B-OP-0005",
    name: "BAG",
    description: "A bag.",
  },
  {
    referenceId: "B2B-OP-0006",
    name: "WRAPPING",
    description: "Wrapping.",
  },
  {
    referenceId: "B2B-OP-0007",
    name: "OTHER",
    description: "Other packaging.",
  },
];

const seedOrderPackagings = () => OrderPackaging.bulkCreate(orderPackagings);

module.exports = { seedOrderPackagings };

const { AccountType } = require("../models");

const accountTypes = [
  {
    referenceId: "B2B-AT-0001",
    name: "DELAWARE",
    description:
      "A person within Delaware who manages available companies (suppliers). If a supplier updates their profile, they must approve it.",
  },
  {
    referenceId: "B2B-AT-0002",
    name: "SUPPLIER",
    description:
      "A company that offers products or services to other companies (buyers).",
  },
  {
    referenceId: "B2B-AT-0003",
    name: "ADMIN",
    description:
      "An employee of a supplier (company) who manages the internal employees of the company.",
  },
  {
    referenceId: "B2B-AT-0004",
    name: "WAREHOUSE",
    description: "An employee of a supplier who processes incoming orders.",
  },
  {
    referenceId: "B2B-AT-0005",
    name: "PURCHASER",
    description:
      "An employee of a supplier who places orders for a company with another supplier.",
  },
  {
    referenceId: "B2B-AT-0006",
    name: "CLIENT",
    description:
      "A supplier who places an order in the portal of another supplier.",
  },
];

const seedAccountTypes = () => {
  return AccountType.bulkCreate(accountTypes);
};

module.exports = { seedAccountTypes };

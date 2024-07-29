const { Address } = require("../models");

const addresses = [
  {
    id: 1,
    street: "Kerkstraat",
    number: "108",
    city: "Gent",
    postalCode: "9000",
    country: "Belgium",
  },
  {
    id: 2,
    street: "Dorpstraat",
    number: "45",
    city: "Antwerpen",
    postalCode: "2000",
    country: "Belgium",
  },
  {
    id: 3,
    street: "Grote Markt",
    number: "12",
    city: "Brussel",
    postalCode: "1000",
    country: "Belgium",
  },
  {
    id: 4,
    street: "Kouter",
    number: "1",
    city: "Gent",
    postalCode: "9000",
    country: "Belgium",
  },
  {
    id: 5,
    street: "Veldstraat",
    number: "12",
    city: "Gent",
    postalCode: "9000",
    country: "Belgium",
  },
  {
    id: 6,
    street: "Valentijn Vaerwyckweg",
    number: "1",
    city: "Gent",
    postalCode: "9000",
    country: "Belgium",
  },
];

const seedAddresses = () => {
  return Address.bulkCreate(addresses);
};

module.exports = { seedAddresses };

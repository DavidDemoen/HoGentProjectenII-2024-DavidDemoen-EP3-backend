const { Gender } = require("../models");

const genders = [
  {
    id: 1,
    name: "male",
    abbreviation: "M",
    salutation: "Mr.",
  },
  {
    id: 2,
    name: "female",
    abbreviation: "F",
    salutation: "Ms.",
  },
  {
    id: 3,
    name: "diverse",
    abbreviation: "D",
    salutation: "Mx.",
  },
  {
    id: 4,
    name: "unknown",
    abbreviation: "U",
    salutation: "Rather not say",
  },
];

const seedGenders = () => {
  return Gender.bulkCreate(genders);
};

module.exports = { seedGenders };

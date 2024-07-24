let ORDERS = [
  {
    id: 1,
    referenceId: "REF-1",
    date: "2021-08-15",
    shippingAddress: "Kortrijk",
    status: "Delivered",
    tracktrace: "123456789",
  },
  {
    id: 2,
    referenceId: "REF-2",
    date: "2021-08-16",
    shippingAddress: "Gent",
    status: "Delivered",
    tracktrace: "987654321",
  },
  {
    id: 3,
    referenceId: "REF-3",
    date: "2021-08-17",
    shippingAddress: "Brussel",
    status: "Delivered",
    tracktrace: "123123123",
  },
  {
    id: 4,
    referenceId: "REF-4",
    date: "2021-08-18",
    shippingAddress: "Antwerpen",
    status: "Delivered",
    tracktrace: "456456456",
  },
  {
    id: 5,
    referenceId: "REF-5",
    date: "2021-08-19",
    shippingAddress: "Leuven",
    status: "Delivered",
    tracktrace: "789789789",
  },
];
let COMPANIES = [
  {
    id: 1,
    name: "Company 1",
    address: "Kortrijk",
    phone: "123456789",
    email: "company_1@portal.io",
    logo: "logo1.png",
    active: true,
  },
  {
    id: 2,
    name: "Company 2",
    address: "Gent",
    phone: "987654321",
    email: "company_2@portal.io",
    logo: "logo2.png",
    active: true,
  },
  {
    id: 3,
    name: "Company 3",
    address: "Brussel",
    phone: "123123123",
    email: "company_3@portal.io",
    logo: "logo3.png",
    active: true,
  },
];

module.exports = { ORDERS, COMPANIES };

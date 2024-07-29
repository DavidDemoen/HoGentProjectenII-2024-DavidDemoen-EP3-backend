const { OrderStatus} = require("../models");

const orderStatuses = [
{
    referenceId: "B2B-OS-0001",
    name: "PENDING",
    description: "The order is pending.",
},
{
    referenceId: "B2B-OS-0002",
    name: "PROCESSING",
    description: "The order is being processed.",
},
{
    referenceId: "B2B-OS-0003",
    name: "SHIPPED",
    description: "The order has been shipped.",
},
{
    referenceId: "B2B-OS-0004",
    name: "DELIVERED",
    description: "The order has been delivered.",
},
{
    referenceId: "B2B-OS-0005",
    name: "CANCELLED",
    description: "The order has been cancelled.",
},

];

const seedOrderStatuses = () => OrderStatus.bulkCreate(orderStatuses);

module.exports = { seedOrderStatuses };
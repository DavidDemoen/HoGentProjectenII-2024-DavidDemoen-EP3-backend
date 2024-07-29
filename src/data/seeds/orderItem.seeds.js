const { OrderItem } = require("../models");

const orderItems = [
    // Order 1
    { id: 1, quantity: 2, transactionUnitPrice: 15.50, transactionDiscount: 0.0, orderId: 1, productId: 45 },
    { id: 2, quantity: 1, transactionUnitPrice: 20.00, transactionDiscount: 0.0, orderId: 1, productId: 78 },
  
    // Order 2
    { id: 3, quantity: 3, transactionUnitPrice: 10.00, transactionDiscount: 0.0, orderId: 2, productId: 33 },
    { id: 4, quantity: 1, transactionUnitPrice: 25.00, transactionDiscount: 0.0, orderId: 2, productId: 89 },
    { id: 5, quantity: 2, transactionUnitPrice: 12.00, transactionDiscount: 0.0, orderId: 2, productId: 44 },
  
    // Order 3
    { id: 6, quantity: 4, transactionUnitPrice: 7.00, transactionDiscount: 0.0, orderId: 3, productId: 12 },
    { id: 7, quantity: 2, transactionUnitPrice: 50.00, transactionDiscount: 0.0, orderId: 3, productId: 55 },
    { id: 8, quantity: 1, transactionUnitPrice: 35.00, transactionDiscount: 0.0, orderId: 3, productId: 67 },
    { id: 9, quantity: 3, transactionUnitPrice: 45.00, transactionDiscount: 0.0, orderId: 3, productId: 21 },
  
    // Order 4
    { id: 10, quantity: 1, transactionUnitPrice: 40.00, transactionDiscount: 0.0, orderId: 4, productId: 99 },
    { id: 11, quantity: 5, transactionUnitPrice: 8.50, transactionDiscount: 0.0, orderId: 4, productId: 22 },
    { id: 12, quantity: 3, transactionUnitPrice: 16.00, transactionDiscount: 0.0, orderId: 4, productId: 41 },
    { id: 13, quantity: 2, transactionUnitPrice: 60.00, transactionDiscount: 0.0, orderId: 4, productId: 76 },
    { id: 14, quantity: 1, transactionUnitPrice: 70.00, transactionDiscount: 0.0, orderId: 4, productId: 32 },
  
    // Order 5
    { id: 15, quantity: 1, transactionUnitPrice: 30.00, transactionDiscount: 0.0, orderId: 5, productId: 84 },
    { id: 16, quantity: 2, transactionUnitPrice: 20.00, transactionDiscount: 0.0, orderId: 5, productId: 92 },
    { id: 17, quantity: 3, transactionUnitPrice: 14.00, transactionDiscount: 0.0, orderId: 5, productId: 27 },
  
    // Order 6
    { id: 18, quantity: 6, transactionUnitPrice: 5.00, transactionDiscount: 0.0, orderId: 6, productId: 25 },
    { id: 19, quantity: 4, transactionUnitPrice: 12.00, transactionDiscount: 0.0, orderId: 6, productId: 47 },
    { id: 20, quantity: 1, transactionUnitPrice: 100.00, transactionDiscount: 0.0, orderId: 6, productId: 68 },
    { id: 21, quantity: 2, transactionUnitPrice: 18.00, transactionDiscount: 0.0, orderId: 6, productId: 90 },
  
    // Order 7
    { id: 22, quantity: 3, transactionUnitPrice: 18.00, transactionDiscount: 0.0, orderId: 7, productId: 82 },
    { id: 23, quantity: 2, transactionUnitPrice: 22.00, transactionDiscount: 0.0, orderId: 7, productId: 93 },
    { id: 24, quantity: 1, transactionUnitPrice: 50.00, transactionDiscount: 0.0, orderId: 7, productId: 29 },
  
    // Order 8
    { id: 25, quantity: 5, transactionUnitPrice: 9.00, transactionDiscount: 0.0, orderId: 8, productId: 17 },
    { id: 26, quantity: 2, transactionUnitPrice: 45.00, transactionDiscount: 0.0, orderId: 8, productId: 54 },
    { id: 27, quantity: 3, transactionUnitPrice: 25.00, transactionDiscount: 0.0, orderId: 8, productId: 66 },
    { id: 28, quantity: 1, transactionUnitPrice: 70.00, transactionDiscount: 0.0, orderId: 8, productId: 39 },
  
    // Order 9
    { id: 29, quantity: 3, transactionUnitPrice: 14.00, transactionDiscount: 0.0, orderId: 9, productId: 66 },
    { id: 30, quantity: 1, transactionUnitPrice: 80.00, transactionDiscount: 0.0, orderId: 9, productId: 99 },
    { id: 31, quantity: 2, transactionUnitPrice: 22.00, transactionDiscount: 0.0, orderId: 9, productId: 57 },
  
    // Order 10
    { id: 32, quantity: 4, transactionUnitPrice: 13.00, transactionDiscount: 0.0, orderId: 10, productId: 21 },
    { id: 33, quantity: 3, transactionUnitPrice: 27.00, transactionDiscount: 0.0, orderId: 10, productId: 38 },
    { id: 34, quantity: 1, transactionUnitPrice: 50.00, transactionDiscount: 0.0, orderId: 10, productId: 72 },
  
    // Order 11
    { id: 35, quantity: 2, transactionUnitPrice: 40.00, transactionDiscount: 0.0, orderId: 11, productId: 60 },
    { id: 36, quantity: 1, transactionUnitPrice: 90.00, transactionDiscount: 0.0, orderId: 11, productId: 70 },
    { id: 37, quantity: 3, transactionUnitPrice: 18.00, transactionDiscount: 0.0, orderId: 11, productId: 43 },
  
    // Order 12
    { id: 38, quantity: 3, transactionUnitPrice: 23.00, transactionDiscount: 0.0, orderId: 12, productId: 19 },
    { id: 39, quantity: 2, transactionUnitPrice: 32.00, transactionDiscount: 0.0, orderId: 12, productId: 46 },
    { id: 40, quantity: 1, transactionUnitPrice: 15.00, transactionDiscount: 0.0, orderId: 12, productId: 34 },
  
    // Order 13
    { id: 41, quantity: 1, transactionUnitPrice: 50.00, transactionDiscount: 0.0, orderId: 13, productId: 91 },
    { id: 42, quantity: 3, transactionUnitPrice: 11.00, transactionDiscount: 0.0, orderId: 13, productId: 52 },
    { id: 43, quantity: 2, transactionUnitPrice: 22.00, transactionDiscount: 0.0, orderId: 13, productId: 83 },
    { id: 44, quantity: 1, transactionUnitPrice: 40.00, transactionDiscount: 0.0, orderId: 13, productId: 30 },
  
    // Order 14
    { id: 45, quantity: 4, transactionUnitPrice: 16.00, transactionDiscount: 0.0, orderId: 14, productId: 39 },
    { id: 46, quantity: 2, transactionUnitPrice: 35.00, transactionDiscount: 0.0, orderId: 14, productId: 65 },
    { id: 47, quantity: 1, transactionUnitPrice: 55.00, transactionDiscount: 0.0, orderId: 14, productId: 73 },
    { id: 48, quantity: 3, transactionUnitPrice: 10.00, transactionDiscount: 0.0, orderId: 14, productId: 87 },
  
    // Order 15
    { id: 49, quantity: 5, transactionUnitPrice: 8.00, transactionDiscount: 0.0, orderId: 15, productId: 15 },
    { id: 50, quantity: 3, transactionUnitPrice: 22.00, transactionDiscount: 0.0, orderId: 15, productId: 59 },
    { id: 51, quantity: 2, transactionUnitPrice: 30.00, transactionDiscount: 0.0, orderId: 15, productId: 94 },
  
    // Order 16
    { id: 52, quantity: 1, transactionUnitPrice: 45.00, transactionDiscount: 0.0, orderId: 16, productId: 18 },
    { id: 53, quantity: 2, transactionUnitPrice: 27.00, transactionDiscount: 0.0, orderId: 16, productId: 81 },
    { id: 54, quantity: 4, transactionUnitPrice: 12.00, transactionDiscount: 0.0, orderId: 16, productId: 62 },
  
    // Order 17
    { id: 55, quantity: 3, transactionUnitPrice: 20.00, transactionDiscount: 0.0, orderId: 17, productId: 88 },
    { id: 56, quantity: 1, transactionUnitPrice: 70.00, transactionDiscount: 0.0, orderId: 17, productId: 40 },
    { id: 57, quantity: 2, transactionUnitPrice: 15.00, transactionDiscount: 0.0, orderId: 17, productId: 28 },
  
    // Order 18
    { id: 58, quantity: 5, transactionUnitPrice: 6.00, transactionDiscount: 0.0, orderId: 18, productId: 72 },
    { id: 59, quantity: 2, transactionUnitPrice: 40.00, transactionDiscount: 0.0, orderId: 18, productId: 53 },
    { id: 60, quantity: 1, transactionUnitPrice: 90.00, transactionDiscount: 0.0, orderId: 18, productId: 96 },
  
    // Order 19
    { id: 61, quantity: 2, transactionUnitPrice: 12.00, transactionDiscount: 0.0, orderId: 19, productId: 83 },
    { id: 62, quantity: 1, transactionUnitPrice: 50.00, transactionDiscount: 0.0, orderId: 19, productId: 49 },
    { id: 63, quantity: 4, transactionUnitPrice: 20.00, transactionDiscount: 0.0, orderId: 19, productId: 74 },
  
    // Order 20
    { id: 64, quantity: 1, transactionUnitPrice: 30.00, transactionDiscount: 0.0, orderId: 20, productId: 95 },
    { id: 65, quantity: 3, transactionUnitPrice: 18.00, transactionDiscount: 0.0, orderId: 20, productId: 88 },
    { id: 66, quantity: 2, transactionUnitPrice: 25.00, transactionDiscount: 0.0, orderId: 20, productId: 51 },
  ];
  

const seedOrderItems = () => OrderItem.bulkCreate(orderItems);

module.exports = { seedOrderItems };

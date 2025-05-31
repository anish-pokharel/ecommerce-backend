const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// Place order
router.post('/', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json(order);
});

// Get orders by user
router.get('/:userId', async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId }).populate('products.productId');
  res.json(orders);
});

module.exports = router;

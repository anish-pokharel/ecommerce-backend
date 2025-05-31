const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

// // Add to cart
// router.post('/', async (req, res) => {
//   const { userId, productId, quantity } = req.body;
//   let cart = await Cart.findOne({ userId });

//   if (!cart) {
//     cart = new Cart({ userId, products: [{ productId, quantity }] });
//   } else {
//     const item = cart.products.find(p => p.productId == productId);
//     if (item) item.quantity += quantity;
//     else cart.products.push({ productId, quantity });
//   }

//   await cart.save();
//   res.json(cart);
// });

// // Get cart
// router.get('/:userId', async (req, res) => {
//   const cart = await Cart.findOne({ userId: req.params.userId }).populate('products.productId');
//   res.json(cart);
// });

module.exports = router;

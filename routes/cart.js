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


let cart = []; // In-memory cart (replace with DB in production)

router.post('/add', (req, res) => {
  const { productId, name, price, selectedColor, selectedSize, quantity, image } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const existingItem = cart.find(item => item.productId === productId && item.selectedColor === selectedColor && item.selectedSize === selectedSize);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ productId, name, price, selectedColor, selectedSize, quantity, image });
  }

  res.status(200).json({ message: 'Product added to cart', cart });
});

router.get('/', (req, res) => {
  res.json(cart);
});

router.post('/clear', (req, res) => {
  cart = [];
  res.json({ message: 'Cart cleared' });
});

module.exports = router;




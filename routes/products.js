const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create
router.post('/', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// Get all
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get by ID
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// Update
router.put('/:id', async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create
router.post('/addproducts', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// Get all
router.get('/productsdetails', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get by ID
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// Update
router.get('/productsdetails/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Update product
router.put('/productsdetails/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated product
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: 'Error updating product', error: err.message });
  }
});
// Delete
router.delete('/productsdetails/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    
    if (!deletedProduct) {
      return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
      });
    }
    
    res.json({
      success: true,
      deletedProduct
    });
    
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error during deletion',
      error: err.message
    });
  }
});

module.exports = router;

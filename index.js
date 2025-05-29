const express = require('express');
const mongoose = require('mongoose');
const connectdb = require('./db');

const app = express();
const cors = require('cors');
const auth= require('./routes/auth');
const cart= require('./routes/cart');
const orders= require('./routes/orders');
const products= require('./routes/products');


// Middlewares
app.use(cors());
app.use(express.json());

app.use(auth);
app.use(cart);
app.use(orders);
app.use(products);


app.listen(3200,()=>{
    console.log('LocalHost is connected');
})
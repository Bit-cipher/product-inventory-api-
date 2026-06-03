require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

//Middleware to parse JSON bodies
app.use(express.json());

//Products Inventory
const products = require("./data/inventory");

//API to get specific product by ID
app.get('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
     const product = products.find(p => p.id === id );

     if (!product) {
        return res.status(404).json({ message: `Product with ID ${id} not found` });
     }
     res.status(200).json(product);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
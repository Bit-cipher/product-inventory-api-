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

//UPDATE Endpoint
app.put('/api/products/:id', (req, res) => {
   const id = parseInt(req.params.id);

   const product = products.find((product) => product.id ===id);

   if (!product){
      return res.status(404).json({
         message: 'Product not found',
      });
   }

   const {name, description, price, stock, category} = req.body;
   
   if (name != undefined) product.name = name;
   if (description != undefined) product.description = description
   if (price != undefined) product.price = price;
   if (stock != undefined) product.stock = stock;
   if (category != undefined) product.category = category;

   res.status (200).json({
      message: "Product updated successfully",
      product,
   });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
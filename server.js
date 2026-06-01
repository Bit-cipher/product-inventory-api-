require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

//Middleware to parse JSON bodies
app.use(express.json());

//Products Inventory
const products = require("./data/inventory");

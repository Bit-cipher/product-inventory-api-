# Product Inventory API

Group 5 backend development project.

This project is an Express.js API that simulates managing products in an inventory. It allows users to add, list, view, edit, and remove products from an in-memory inventory list.

## Project Objective

The goal of this project is to demonstrate backend API development using Node.js and Express.js by building a simple Product Inventory API with CRUD operations.

CRUD means:

- Create: Add a new product
- Read: List all products or view one product
- Update: Edit an existing product
- Delete: Remove a product

## Tech Stack

- Node.js
- Express.js
- dotenv
- nodemon
- Postman

## Project Structure

```text
product-inventory-api/
|-- data/
|   `-- inventory.js
|-- .env
|-- .gitignore
|-- package.json
|-- package-lock.json
|-- README.md
`-- server.js
```

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd product-inventory-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment File

Create a `.env` file in the root directory and add:

```env
PORT=8000
```

### 4. Start the Server

For normal start:

```bash
npm start
```

For development with nodemon:

```bash
npm run dev
```

The API should run at:

```text
http://localhost:8000
```

## Product Data Model

Each product has the following fields:

```json
{
  "id": 1,
  "name": "Wireless Ergonomic Mouse",
  "description": "2.4GHz wireless mouse with adjustable DPI and ergonomic thumb rest.",
  "price": 29.99,
  "stock": 45,
  "category": "Electronics"
}
```

## API Endpoints

Base URL:

```text
http://localhost:8000/api/products
```

| Method | Endpoint | Description | Status |
| --- | --- | --- | --- |
| GET | `/api/products` | List all products | To be implemented |
| GET | `/api/products/:id` | Get a single product by ID | Implemented |
| POST | `/api/products` | Add a new product | To be implemented |
| PUT | `/api/products/:id` | Update an existing product | Implemented |
| DELETE | `/api/products/:id` | Delete a product | To be implemented |

## Sample Requests

### Get One Product

```http
GET /api/products/1
```

Example response:

```json
{
  "id": 1,
  "name": "Wireless Ergonomic Mouse",
  "description": "2.4GHz wireless mouse with adjustable DPI and ergonomic thumb rest.",
  "price": 29.99,
  "stock": 45,
  "category": "Electronics"
}
```

### Add New Product

```http
POST /api/products
```

Example request body:

```json
{
  "name": "USB-C Fast Charger",
  "description": "Compact 45W USB-C charger for phones, tablets, and laptops.",
  "price": 34.99,
  "stock": 30,
  "category": "Electronics"
}
```

### Update Product

```http
PUT /api/products/1
```

Example request body:

```json
{
  "price": 27.99,
  "stock": 60
}
```

Example response:

```json
{
  "message": "Product updated successfully",
  "product": {
    "id": 1,
    "name": "Wireless Ergonomic Mouse",
    "description": "2.4GHz wireless mouse with adjustable DPI and ergonomic thumb rest.",
    "price": 27.99,
    "stock": 60,
    "category": "Electronics"
  }
}
```

### Delete Product

```http
DELETE /api/products/1
```

Example response:

```json
{
  "message": "Product deleted successfully"
}
```

## Postman Collection

A Postman collection should be created to test all API endpoints.

Recommended collection name:

```text
Product Inventory API - Group 5
```

The collection should include:

- List all products
- Get product by ID
- Add new product
- Update product
- Delete product
- Test invalid product ID
- Test missing or invalid request body

## Group Task Allocation

Every group member should make at least one commit before submission. Replace the names below with the real names of your group members.

| Member | Task | Expected Commit Message |
| --- | --- | --- |
| Member 1 | Set up Express server, middleware, environment config, and start scripts | `Set up Express server` |
| Member 2 | Create inventory data file and sample product records | `Add sample inventory data` |
| Member 3 | Implement product listing and single-product GET endpoints | `Add product read endpoints` |
| Member 4 | Implement POST endpoint for adding new products | `Add create product endpoint` |
| Member 5 | Implement PUT endpoint for editing products | `Add update product endpoint` |
| Member 6 | Implement DELETE endpoint for removing products | `Add delete product endpoint` |
| Member 7 | Add validation and error handling for invalid IDs and request bodies | `Add validation and error handling` |
| Member 8 | Create Postman collection and export it into the repository | `Add Postman collection` |
| Member 9 | Prepare presentation slides and update README documentation | `Add project documentation` |

If the group has fewer members, combine related tasks. If the group has more members, split testing, documentation, deployment, and presentation work into separate commits.

## Suggested Commit Plan

To make sure all members contribute:

1. Each member should pull the latest code before working.
2. Each member should work on only their assigned task.
3. Each member should commit with a clear message.
4. Each member should push their branch or changes to GitHub.
5. The group should confirm that GitHub shows commits from every member.

Example commands:

```bash
git pull
git status
git add .
git commit -m "Add create product endpoint"
git push
```

## Presentation Guide

The PowerPoint or Google Slides presentation should include:

- Project title and group name
- Problem statement
- Project objective
- Technologies used
- API endpoint table
- Code structure explanation
- Postman testing screenshots
- Live demo steps
- Challenges faced
- Conclusion

## Live Demo Steps

During presentation week:

1. Start the server with `npm run dev`.
2. Open Postman.
3. Test `GET /api/products`.
4. Test `GET /api/products/:id`.
5. Test `POST /api/products`.
6. Test `PUT /api/products/:id`.
7. Test `DELETE /api/products/:id`.
8. Show the response status codes and JSON responses.

## Expected Deliverables

- Express.js API implementing CRUD operations
- GitHub repository with commits from all members
- Postman collection for testing endpoints
- PowerPoint or Google Slides presentation explaining the project
- Live demo using localhost or deployment


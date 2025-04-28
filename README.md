# E-commerce CRUD Application

## Overview
This is a simple **E-commerce CRUD application** where users can create, read, update, and delete products.  
It is built with **Node.js, Express, MongoDB, React** and is designed for learning and practice purposes.

## Features
- Add new products
- View all available products
- Update product details
- Delete products

## Technologies Used
- Frontend: [React, Zustand, HTML, CSS, Tailwind CSS, DaisyUI]
- Backend: [Node.js, Express.js]
- Database: [MongoDB Atlas]
- Tools: [Postman (for API testing), GitHub]

## Folder Structure
```bash
/backend
  /models
  /routes
  /controllers
  server.js
/frontend
  /src
    /components
    /pages
    /store
    App.js
    main.js
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB (Atlas or Local)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/safwan-ms/MERN-Stack-CRUD-Application.git
   cd MERN-Stack-CRUD-Application
   ```

2. Setup the backend:
   ```bash
   npm install
   ```

3. Setup the frontend:
   ```bash
   cd frontend
   npm install
   ```

4. Create a `.env` file in `/backend`:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
 
   ```

5. Run the backend:
   ```bash
   npm run backend
   ```

6. Run the frontend:
   ```bash
   npm run frontend
   ```

### API Endpoints
| Method | Endpoint | Description |
|:------:|:--------:|:------------|
| POST   | /api/products | Add a new product |
| GET    | /api/products | Get all products |
| GET    | /api/products/:id | Get a single product by ID |
| PUT    | /api/products/:id | Update a product |
| DELETE | /api/products/:id | Delete a product |

### Sample Product Schema
```javascript
{
  name: String,
  price: Number,
  image: String,
  
}
```



## Contact
- GitHub: [your-github-username](https://github.com/your-github-username)
- Email: [safwan.anasms@gmail.com]

# E-Commerce React App

This project is an e-commerce web application built with React, Redux Toolkit, and React Router. It includes a fully functional "Add to Cart" system, search functionality, and dynamic routing for product details.

## Features

- **Product List**: Displays a list of products fetched from local data.

- **Search Functionality**: Users can search for products by title.

- **Product Details**: View detailed information about individual products.

- **Add to Cart**: Add products to the cart with dynamic quantity management.

## Cart Management:

View all items in the cart.

Update item quantities directly from the cart.

Remove items from the cart.

Redux Toolkit Integration: Global state management for cart functionality.

React Router Integration: Routing for home, product details, and cart pages.

Lazy Loading: Components are lazy-loaded for better performance.
Installation

1. Clone the repository:
   ```bash
    git clone https://github.com/ROHIT-RICH/simpleE-commerce.github.io
    ```

2. Navigate to the project directory:

   ``` bach 
   cd ecommerce-react-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```bash
   http://localhost:3000
   ```

## Available Scripts

# npm run dev: Start the development server.

# npm run build: Build the app for production.

# npm run preview: Preview the production build locally.

## How It Works

Product List

The product data is stored in src/data/products.js.

Products are displayed in a list with an option to search by title.

Add to Cart

Clicking the "Add to Cart" button dispatches the addToCart action to Redux.

If the product already exists in the cart, its quantity is incremented.

Cart Management

The cart is displayed in the Cart component, showing all added products.

Users can update quantities or remove items from the cart.

## Routing

Home (/): Displays the product list.

Product Details (/product/:id): Displays details of a specific product.

Cart (/cart): Displays the items in the cart.

404 Page (*): Displays a 404 error for invalid routes.

## Future Enhancements

Integrate with a backend for product and cart data.

Add user authentication.

Implement a checkout system.

Save cart state to localStorage.

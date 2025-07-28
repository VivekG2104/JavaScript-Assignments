#  ShoppyGlobe E-commerce Application

A responsive and modern e-commerce web application built with **React**, **Redux**, and **Tailwind CSS**. This project allows users to browse products, view product details, add items to a shopping cart, and update/remove items—all with dynamic routing and API integration.

##  Features

-  Component-based architecture
-  Product list fetched from an API (`https://dummyjson.com/products`)
-  Product detail page with dynamic routing
-  Add to Cart & Remove from Cart (Redux powered)
-  Update quantity in cart
-  Search products in real-time
-  Lazy loading with `React.lazy` and `Suspense`
-  404 Not Found Page
-  Responsive design using Tailwind CSS
-  Graceful error handling for failed API requests

---

## Technologies Used

- React
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Axios
- JavaScript (ES6+)
- HTML5/CSS3

---

## Folder Structure
src/
│
├── components/
│ ├── Header.jsx
│ ├── ProductList.jsx
│ ├── ProductItem.jsx
│ ├── ProductDetail.jsx
│ ├── Cart.jsx
│ ├── CartItem.jsx
│ └── NotFound.jsx
│
├── hooks/
│ └── useFetchProducts.js
│
├── redux/
│ ├── cartSlice.js
│ └── store.js
│
├── App.jsx
├── App.css
└── index.css
├── main.jsx

```bash
git clone https://github.com/VivekG2104/JavaScript-Assignments/react_shoppy-globe.git
cd react-todo-app
npm install
npm run dev
```
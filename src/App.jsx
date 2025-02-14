/* eslint-disable no-unused-vars */
import React from 'react'
import ProductList from './ProductsListFile/ProductList'

function App() {
  const pro_list = [
    {
      id: 1,
      name: "Wireless Bluetooth Earbuds",
      price: 2999,
      category: "Electronics",
      description: "Noise-canceling wireless earbuds with 20-hour battery life.",
      color:"Red"
    },
    {
      id: 2,
      name: "Smartwatch Pro",
      price: 4999,
      category: "Wearables",
      description: "Fitness tracking smartwatch with heart rate monitoring and GPS.",
      color: "Green"
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: 74999,
      category: "Computers",
      description: "High-performance gaming laptop with RTX 4060 and 16GB RAM.",
      color:"Blue"
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 5999,
      category: "Accessories",
      description: "RGB backlit mechanical keyboard with tactile switches.",
      color:"Yellow"
    },
    {
      id: 5,
      name: "Noise-Canceling Headphones",
      price: 8999,
      category: "Electronics",
      description: "Over-ear noise-canceling headphones with deep bass.",
      color:"Cyan"
    },
    {
      id: 6,
      name: "4K Smart TV",
      price: 39999,
      category: "Home Appliances",
      description: "50-inch 4K Ultra HD smart TV with built-in streaming apps.",
      color:"Magenta"
    },
    {
      id: 7,
      name: "Smartphone X",
      price: 59999,
      category: "Mobiles",
      description: "Flagship smartphone with 108MP camera and AMOLED display.",
      color:"Gray"
    },
    {
      id: 8,
      name: "Wireless Charging Pad",
      price: 1999,
      category: "Accessories",
      description: "Fast wireless charging pad for multiple devices.",
      color:"Orange"
    },
    {
      id: 9,
      name: "Portable Bluetooth Speaker",
      price: 3499,
      category: "Audio",
      description: "Waterproof Bluetooth speaker with deep bass and long battery life.",
      color:"Pink"
    },
    {
      id: 10,
      name: "Fitness Band",
      price: 2499,
      category: "Wearables",
      description: "Water-resistant fitness band with step tracking and heart rate monitoring.",
      color:"Purple"
    }
  ]

  return (
    <>
      <ProductList products={pro_list} />
    </>
  )
}

export default App

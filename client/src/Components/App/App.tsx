import React from 'react'
import ProductList from '../ProductList/ProductList'
import Header from '../Header/Header'
import Home from '../Home/Home'
import ProductDetails from '../ProductDetails/ProductDetails'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
 } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Filter /> */}
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/products'
            element={<ProductList />}
          />
          <Route
            path='/products/:id'
            element={<ProductDetails />}
          />
          <Route
            path='*'
            element={<Navigate to='/' />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App

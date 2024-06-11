import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import { ProductsProvider } from "./context/ProductsProvider"
import Cart from "./components/Cart"
import Market from "./components/Market"
import { CartProvider } from "./context/CartProvider"
import Order from "./components/Order"

function App() {

  return (
    <>
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/market" element={<Market />} />
              <Route path="cart" element={<Cart />} />     
              <Route path="order" element={<Order />} />      
          </Routes>
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>    
    </>
  )
}

export default App

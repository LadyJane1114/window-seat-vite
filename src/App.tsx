
import './styles/App.css'
import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import CartPage from "./pages/CartPage.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import ConfirmationPage from "./pages/ConfirmationPage.tsx";

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
          <Route path="/confirmation" element={<ConfirmationPage/>}/>
      </Routes>
    </>
  )
}

export default App

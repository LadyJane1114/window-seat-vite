import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import NavBar from "./components/NavBar.tsx";
import HomePage from "./pages/HomePage.tsx";
import DetailsPage from "./pages/DetailsPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import ConfirmationPage from "./pages/ConfirmationPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <>
              <NavBar/>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/details" element={<DetailsPage/>}/>
                  <Route path="/cart" element={<CartPage/>}/>
                  <Route path="/checkout" element={<CheckoutPage/>}/>
                  <Route path="/confirmation" element={<ConfirmationPage/>}/>
              </Routes>
          </>
      </BrowserRouter>
  </StrictMode>,
)

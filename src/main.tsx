import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";

import './styles/index.css'

import HomePage from "./pages/HomePage.tsx";
import DetailsPage from "./pages/DetailsPage.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import ConfirmationPage from "./pages/ConfirmationPage.tsx";
import Layout from "./pages/Layout.tsx";

import Cookies from "js-cookie"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
              <Routes>
                  <Route element={<Layout/>}>
                      <Route path="/" element={<HomePage/>}/>
                      <Route path="/details/:prodID" element={<DetailsPage/>}/>
                      <Route path="/checkout" element={<CheckoutPage/>}/>
                      <Route path="/confirmation" element={<ConfirmationPage/>}/>
                  </Route>
              </Routes>
      </BrowserRouter>
  </StrictMode>
)

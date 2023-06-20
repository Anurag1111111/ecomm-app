import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OurStore from "./components/OurStore";
import CompareProduct from "./components/CompareProduct";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import SignUp from "./components/SignUp";
import ProductPage from "./components/ProductPage";
import { Provider } from "./context";
import ProductShoePage from "./components/ProductShoePage";
import ScrollToTop from "./components/ScrollToTop";
import RecommendationPage from "./components/RecommendationPage";
import ProductWhishlist from "./components/ProductWhishlist";
import { createHashHistory } from "history";
import Cart from "./components/Cart";
export const history = createHashHistory();

function App() {
  return (
    <Provider>
      <HashRouter history={history}>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<OurStore />} />
            <Route path="/compare-product" element={<CompareProduct />} />
            <Route path="/product-whishlist" element={<ProductWhishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login-page" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup-page" element={<SignUp />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/shoe/:id" element={<ProductShoePage />} />
            <Route
              path="/recommendation/:id"
              element={<RecommendationPage />}
            />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </Provider>
  );
}

export default App;

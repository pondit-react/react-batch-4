import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import UserListScreen from "./screens/UserListScreen";
import OrderScreen from "./screens/OrderScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/login" element={<LoginScreen/>} />
            <Route path="/register" element={<RegisterScreen/>} />
            <Route path="/shipping" element={<ShippingScreen/>} />
            <Route path="/payment" element={<PaymentScreen/>} />
            <Route path="/profile" element={<ProfileScreen/>} />
            <Route path="/placeorder" element={<PlaceOrderScreen/>} />
            <Route path="/admin/userlist" element={<UserListScreen/>} />
            <Route path="/product/:id" element={<ProductScreen/>} />
            
            <Route path="/cart/*" element={<CartScreen/>} />
            <Route path="/order/:id" element={<OrderScreen/>} />
            <Route
              path="/admin/user/:id/edit"
              element={<UserEditScreen/>}
            />
            <Route
              path="/admin/productlist"
              element={<ProductListScreen/>}
            />
            <Route
              path="/admin/productlist/:pageNumber"
              element={<ProductListScreen/>}
            />
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditScreen/>}
            />
            <Route path="/admin/orderlist" element={<OrderListScreen/>} />

            <Route path="/search/:keyword" element={<HomeScreen/>} />
            <Route path="/page/:pageNumber" element={<HomeScreen/>} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<HomeScreen/>}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
      
    </BrowserRouter>
  );
};

export default App;

import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
// import * as screens from "./screens";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            {/* <Route path="/" element={<HomeScreen/>} /> */}
            <Route path="/login" element={<LoginScreen/>} />
            {/* <Route path="/placeorder" element={screens.PlaceOrderScreen} />
            <Route path="/register" element={screens.RegisterScreen} />
            <Route path="/order/:id" element={screens.OrderScreen} />
            <Route path="/payment" element={screens.PaymentScreen} />
            <Route path="/shipping" element={screens.ShippingScreen} />
            <Route path="/profile" element={screens.ProfileScreen} />
            <Route path="/product/:id" element={screens.ProductScreen} />
            <Route path="/cart/:id?" element={screens.CartScreen} />
            <Route path="/admin/userlist" element={screens.UserListScreen} />
            <Route
              path="/admin/user/:id/edit"
              element={screens.UserEditScreen}
            />
            <Route
              path="/admin/productlist"
              element={screens.ProductListScreen}
            />
            <Route
              path="/admin/productlist/:pageNumber"
              element={screens.ProductListScreen}
            />
            <Route
              path="/admin/product/:id/edit"
              element={screens.ProductEditScreen}
            />
            <Route path="/admin/orderlist" element={screens.OrderListScreen} />

            <Route path="/search/:keyword" element={screens.HomeScreen} exact />
            <Route path="/page/:pageNumber" element={screens.HomeScreen} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={screens.HomeScreen}
            /> */}
          </Routes>
        </Container>
      </main>
      <Footer />
      {/* 
      
        
        </Container>
      </main>
       */}
    </BrowserRouter>
  );
};

export default App;

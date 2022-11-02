import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserId } from "./pages/Users";
import { Home } from "./pages/Home";
import { Team } from "./pages/Team";
import { Products } from "./pages/Products";
import { Services } from "./pages/Services";
//import { Layout } from "./pages/Layout";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/team" element={<Team />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userId" element={<UserId />} />
        <Route path="/" element={<Home />} />z
      </Routes>
    </BrowserRouter>
  );
}
export default App;

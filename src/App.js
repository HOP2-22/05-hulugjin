import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserId } from "./pages/Users";
import { Home } from "./pages/Home";
import { Team } from "./pages/Team";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:te" element={<Team />} />
        <Route path="/:userId" element={<UserId />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

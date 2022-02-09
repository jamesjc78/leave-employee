import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/login/login";
import Home from "./components/home/home";
import NavBar from "./components/navbar";
import Account from "./components/account/account";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route
        path="/home"
        element={
          <div>
            <NavBar />
            <Home />
          </div>
        }
      />
      <Route
        path="/account"
        element={
          <div>
            <NavBar />
            <Account />
          </div>
        }
      />
    </Routes>
  );
}

export default App;

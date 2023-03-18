import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopMenu } from "./components/TopMenu";
import { Login } from "./screens/Login";
import { Main } from "./screens/Main";
import { Shop } from "./screens/Shop";
import { Signup } from "./screens/signup";
import { Text } from "./screens/Text";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopMenu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/text" element={<Text />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

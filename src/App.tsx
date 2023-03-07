import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopMenu } from "./components/TopMenu";
import { Main } from "./screens/Main";
import { Shop } from "./screens/Shop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopMenu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

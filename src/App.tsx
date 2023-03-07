import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopMenu } from "./components/TopMenu";
import { Main } from "./screens/main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopMenu />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

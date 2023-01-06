import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./component/Beranda";
import Navbar from "./component/Navbar";
import ManajemenBuku from "./component/ManajemenBuku";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Beranda />} />
          <Route path="/manajemen-buku" element={<ManajemenBuku />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

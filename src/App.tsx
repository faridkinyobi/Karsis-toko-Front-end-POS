// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Product from "./page/Product/index";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from "./router/AuthLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/product" element={<Product />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

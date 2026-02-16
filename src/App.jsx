import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";   
import Order from "./pages/Order";
import Success from "./pages/Success";

export default function App() {
  const [orderResult, setOrderResult] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/order"
          element={<Order setOrderResult={setOrderResult} />}
        />

        <Route
          path="/success"
          element={
            orderResult ? (
              <Success orderResult={orderResult} />
            ) : (
              <Navigate to="/order" replace />
            )
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

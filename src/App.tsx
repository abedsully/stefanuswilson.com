import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import routes from "./config/Route";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, idx) => (
            <Route key={idx} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;

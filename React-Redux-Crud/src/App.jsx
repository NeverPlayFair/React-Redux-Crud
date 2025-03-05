// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css'; // Możesz usunąć, jeśli całkowicie przechodzisz na MUI

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="edit/:id" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

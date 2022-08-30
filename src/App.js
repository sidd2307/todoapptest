import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './pages/Search';
import Todoapp from './pages/Todoapp';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Todoapp />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/home/Home'

const Router = () => {
  return (
    <BrowserRouter>
        <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
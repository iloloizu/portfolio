import React from 'react';
import NavBar from './components/NavBar';
import '../src/styles/App.css'
import '../src/styles/app_layout.css'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';

import {Routes, Route} from 'react-router-dom'


export default function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content"> 
          <Routes>
              <Route path="/" element={<HomePage/>}>
              </Route>
              <Route path="/about" element={<AboutPage/>}>
              </Route>
              <Route path="/portfolio" element={<PortfolioPage/>}>
              </Route>
              <Route path="/blogs" element={<BlogsPage/>}>
              </Route>
              <Route path="/contact" element={<ContactPage/>}>
              </Route>
          </Routes>
          </div>
      </div>
    </div>
  )
}


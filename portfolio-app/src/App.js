import React from 'react';
import NavBar from './components/NavBar';
import '../src/styles/App.css'
import '../src/styles/app_layout.css'

export default function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        
      </div>
    </div>
  )
}


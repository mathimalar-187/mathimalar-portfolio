import React from 'react'
import Header from './components/header'
import Topcontainer from './components/TopContainer/topcontainer'
import Skillcontainer from './components/TopContainer/skillcontainer';
import Projectcontainer from './components/TopContainer/projectcontainer';
import Contact from './components/TopContainer/contact';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Topcontainer />
      <Skillcontainer />
      <Projectcontainer />
      <Contact />
    </div>
  )
}

export default App

import React from 'react'

import { Blog, Footer, Header, Possibility, WhatGPT3 } from './CONTAINERS';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
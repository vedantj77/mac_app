import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import Showcase from './components/Showcase'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import MacbookModel14 from './components/models/Macbook-14';

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <NavBar/>
        <Hero/>
        <ProductViewer />
        <Showcase/>
    </main>
  )
}

export default App
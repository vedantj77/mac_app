import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import Showcase from './components/Showcase'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import MacbookModel14 from './components/models/Macbook-14';
import Showcase from './components/Showcase';
import Performance from './components/Performance';
import Footer from './components/Footer';
import Features from './components/Features';
import Highlights from './components/Highlights';

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <NavBar/>
        <Hero/>
        <ProductViewer />
        <Showcase/>
<<<<<<< HEAD
        <Performance/>
        <Features/>
        <Highlights/>
        <Footer/>

=======
>>>>>>> deba2ab974d0bd87b10de41b196be8a7767bba27
    </main>
  )
}

export default App
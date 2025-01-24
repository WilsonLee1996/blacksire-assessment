// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Pricing from "./components/Pricing";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Faqs from "./components/Faqs";
import Features from "./components/Features";
import Section3 from "./components/Section3";
import Quote from "./components/Quote";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Divider1 from "./components/Divider1";
import Divider2 from "./components/Divider2";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Section3 />
      <Divider1 />
      <Features />
      <Divider2 />
      <Section1 />
      <Section2 />
      <Pricing />
      <Faqs />
      <Quote />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;

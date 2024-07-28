//import logo from './logo.svg';
import './App.css';
//import { useState, useEffect } from 'react';
//import axios from 'axios';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs.jsx'
import ContactUs from './Pages/ContactUs/ContactUs.jsx';
import Header from './components/Header/Header.jsx';
import  Home  from './Pages/Home/Home.jsx';
import Audit from './Pages/Audit/Audit.jsx';
import Consult from './Pages/Consult/Consult.jsx';
function App() {


  
  const faqList = [
    {
      question: "1. What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "2.How do you use React?",
      answer: "You can use React by creating components that represent parts of the UI."
    },
    {
      question: "3.What is JSX?",
      answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML."
    },
    {
      question: "4.What is the difference between HTML and JSX?",
      answer:"HTML is for static pages and JSX is used for Dynamic pages "
    },
    {
      question:"5.What is Css?",
      answer:"List the types of consulting services offered such as business strategy, financial advisory, IT consulting, HR consulting, etc"
    },
    {
      question:"6.How can I request a consultation?",
      answer:"Explain the process for requesting a consultation, including any forms to fill out or contact information."

    },
    {
      question:"7 What industries do you specialize in?",
      answer:"Mention the industries your consulting services cater to."
    },
    {
      question:"8 Do you offer customized consulting solutions?",
      answer:"Describe the availability of tailored consulting services and how clients can request specific solutions."
    },
    {
      question:"9 What is the typical duration of a consulting project?",
      answer:"Provide information on the average length of consulting projects"
    },
    {
      question:"10 What is the cost of your consulting services?",
      answer:"Provide a general price range for consulting services and any factors that may affect the cost."
    }
  ];

  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home /> }/>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />}/>
          <Route path="/consult" element={<Consult />}/>
          <Route path='/audit' element={<Audit/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );

}

export default App;

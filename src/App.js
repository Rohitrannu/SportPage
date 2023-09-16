import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import  Home from './components/Home';
import{ BrowserRouter ,Route,Routes} from 'react-router-dom'
import About from './components/About';
import TmpFooter from './components/TmpFooter';
import ContactUs from './components/ContactUs';
import LoInMy from './components/LoInMy';
import Quote from './Quote';
import McqGame from './components/McqGame';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar title="JS Sport" about="About-Us" contact="Contact-Us" login="Log-In" quote="Quote" Game="MCQ-Game" />
     <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/about"  element={<About/>}/>
     <Route exact path="/contact"  element={<ContactUs/>}/>
     <Route exact path="/quote"  element={<Quote/>}/>
     <Route exact path="/login"  element={<LoInMy/>}/>
     <Route exact path="/Mcq"  element={<McqGame/>}/>
     </Routes>
     
      </BrowserRouter>
      <TmpFooter/>
      
        
    </>
  );
}

export default App;
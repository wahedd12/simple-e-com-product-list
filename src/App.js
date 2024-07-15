// import logo from './logo.svg';
 import './App.css';
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Section from './components/Section';
import chair from './images/chair.jpeg';
import bed from './images/bed.jpeg';
import door from './images/door.jpeg';



function App() {
  const [show, setShow] = useState (false)
const List= () => {
  if (show == true ){
    setShow (false)
  }else{
    setShow(true)
  }
}

  return (
    <div className="App">
       
       <header>
        
               <h3 className='company'>WASPO INVESTMENT</h3> 
               
                <div className="oke">
           <ul>
               
                    <li><a href="ok">Home</a>
                    <ul>
                        <li><a href="sample.html">homepage</a></li>
                    </ul>
                    </li>
                    <li><a href="ok">About us</a></li>
                    <li><a href="ok">Service</a>
                        <ul>
                            <li><a href="ok">Order online</a></li>
                            <li><a href="ok">Exchange</a></li>
                            <li><a href="ok">Sell out</a>

                            </li>
                         </ul></li>
                     <li><a href="ok">Contact</a></li>
                    
                    <li><a href="ok">Help</a></li>
                    <button className="btnlogin-popup">login&Register</button>
                </ul>
     
    </div>
       </header>


       
       <br/>



          <h2>Our Product List</h2>

          <div className='my-images'>
            <img src={chair} alt=''/>
             <img src={bed} alt=''/>
             <img src={door} alt=''/>
             <p>check out few photos of our beatiful work</p>
          </div> 
         
          
          
      <span>Please <button className='btn' onClick={List}>Click here
        </button> to see product list and prices</span>
      {
     show && (<ProductList />)
}      
    </div>
  );
}

export default App;

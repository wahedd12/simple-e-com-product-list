// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ProductList from "./components/ProductList";

import chair from './images/chair.jpeg';
import bed from './images/bed.jpeg';
import door from './images/door.jpeg';
import Login from './components/Login ';





function App() {
  const [show, setShow] = useState (false)
const List= () => {
  if (show == true ){
    setShow (false)
  }else{
    setShow(true)
  }
}

 
const [appear, setAppear] = useState (false)
const pop= () => {
  if ( appear == true ){
    setAppear (false)
  }else{
    setAppear(true)
  }
}

  return (
    <div className="App">
    
    <div>

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
                            <li><a href="ok">Item exchange</a></li>
                            <li><a href="ok">Sell out</a>

                            </li>
                         </ul></li>
                     <li><a href="ok">Contact</a></li>
                    
                    <li><a href="ok">Help</a></li>
                    <button className="btnlogin-popup"onClick={pop} >login&Register</button>
                </ul>
   
    </div>
    
       </header>
       
       

   <button className="btnlogin-popup"onClick={pop} >login&Register</button>
   
         

  {
     appear && (<Login />)
}   
    </div>


       <br/>
   
          <h2>Our Product List</h2>

          <div className='my-images'>
            <img src={chair} alt=''/>
             <img src={bed} alt=''/>
             <img src={door} alt=''/>
             <p>check out few photos of our beatiful work</p>
          </div> 
         
          
          
      <span>Please <button className='btn1' onClick={List}>Click here
        </button> to see product list and prices</span>
      {
     show && (<ProductList />)
}      
    </div>
  );
}

export default App;

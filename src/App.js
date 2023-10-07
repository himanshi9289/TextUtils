import './App.css';
import React, { useState } from "react";
import {Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AccorDin from './Componenets/AccorDin';
import NavBar from './Componenets/NavBar';
import TextUtils from './Componenets/TextUtils';
import { BsSunFill } from 'react-icons/bs';
import { BsMoonStarsFill } from 'react-icons/bs';
import Blogs from './Componenets/Blogs';

// import AccorDin from './Componenets/AccorDin';
function App() {
  const [mode,setText] = useState('Light');
  const [colour,setColour] = useState('text-yellow-400');
  const [divBackground,setDivBackground] = useState('bg-pink-400');
  const [popup,setPopup] = useState(0); 

  // Mode Toggle here function on click 
  const modeClick = () => {
    if(mode === 'Light'){
      setText('Dark');
      setColour('text-white');
      setDivBackground('bg-gray-600');
      document.title = "TextUtils - Dark Mode";
    }else{
      setText('Light');
      setColour('text-yellow-400');
      setDivBackground('bg-pink-400');
      document.title = "TextUtils - Light Mode";
    }
    setPopup(1);
    // seTime to disable the popup
    setTimeout(()=>setPopup(0),1500);
  } 

  return (
  <Router>
    <span className='bg-blue-100 '>
      <NavBar title="TextUtils" subtitle1="Home" subtitle2="About" subtitle3="Blogs" subtitle4="Contact"/>

      {/* Mode Bar */}
      <div className={` ${divBackground} p-2 flex justify-end drop-shadow-md shadow-md shadow-gray-700`}>
        <button onClick={modeClick} className='flex items-center drop-shadow-md'>
          <h1 color={'white'} className={`${colour} m-1 font-semibold text-xl`} > {mode} Mode </h1>
          { mode === 'Light' &&(
            <div className='m-1'><BsSunFill color={'yellow'} fontSize={'30px'}/></div>
          )
          }
          {
            mode === 'Dark' &&(
              <div className='m-1'><BsMoonStarsFill color={'white'}  fontSize={'30px'} /></div>
            )
          }
        </button>
      </div>
      
      {/* When Mode changes so pop comes here */}
      <div style={{height: '40px'}} className={`${(mode === 'Light'?'bg-blue-100':'bg-black')}`}>
          { popup === 1 && (<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative transition-all" role="alert">
              <strong class="font-bold">Great! </strong>
              <span class="block sm:inline">Successfully the mode is changed to {mode} Mode.</span>
            </div>)
          }
      </div>
      
      <Routes>
        <Route exact path='/contact' element={<AccorDin bgcolour={(mode === 'Light'?'bg-blue-100':'bg-black')} accBgColor={(mode === 'Light'?'bg-white':'bg-gray-300')} />}></Route>

        <Route exact path='/blogs' element={<Blogs bgcolour={(mode === 'Light'?'bg-blue-100':'bg-black')} accBgColor={(mode === 'Light'?'bg-white':'bg-gray-300')} />}></Route>
        
        <Route exact path='/about' element={<AccorDin  bgcolour={(mode === 'Light'?'bg-blue-100':'bg-black')} accBgColor={(mode === 'Light'?'bg-white':'bg-gray-300')} />}></Route>
        
        <Route exact path='/home' element={<TextUtils colour={(mode === 'Light'?'bg-blue-100':'bg-black')} txtcolor={(mode === 'Light'?'text-black':'text-white')} />}></Route>
        
        <Route exact path='/' element={<TextUtils colour={(mode === 'Light'?'bg-blue-100':'bg-black')} txtcolor={(mode === 'Light'?'text-black':'text-white')} />}></Route>
      </Routes>

    </span>
    </Router>
  );
}
export default App;

import { useState } from "react"
// import propTypes from 'prop-types'

export default function TextUtils(prop) {

  const [trans,setTrans]=useState("");
  const [text,setText]=useState("");

  const textChange = (event) =>{ 
    console.log("Text Change");
    setText(event.target.value);  
  }

  const upperCase = () => {
    console.log("Uppercase"); 
    setTrans(text.toUpperCase());
  }

  const lowerCase =() => {
    console.log("Uppercase");
    setTrans(text.toLowerCase());
  }

  const removeText = () => {
    console.log("Remove Text");
    setText("");
  }

  const copyText = () => {
    console.log("Copy Text");
    navigator.clipboard.writeText(text);
    alert("Text Copied");
  }

  return (
    <>
    <div className={` ${prop.colour} p-10 min-h-screen`}>
      <div className="flex justify-center">
        <div className={` ${prop.txtcolor} p-4 text-3xl font-semibold`}>Enter Text here : </div>
        <div className="w-3/5">
          <textarea cols="90" rows="10" placeholder="Hi It's Himanshi" value={text} onChange={textChange} className="p-3 border-2 border-gray-500 rounded-md shadow-gray-600 shadow-sm"></textarea>
          <div className="flex flex-wrap ">
            <button onClick={upperCase} className="m-4 btn text-white border-green-600 bg-green-600 hover:bg-green-800 shadow">Uppercase</button> 
            <button onClick={lowerCase} className="m-4 btn text-white border-blue-600 bg-blue-600 hover:bg-blue-800 shadow">Lowercase</button>
            <button onClick={copyText} className="m-4 btn text-white border-orange-600 bg-orange-600 hover:bg-orange-800 shadow">Copy</button>
            <button onClick={removeText} className="m-4 btn text-white border-yellow-600 bg-yellow-600 hover:bg-yellow-800 shadow">Remove</button>
            <button onClick={removeText} className="m-4 btn text-white border-pink-600 bg-pink-600 hover:bg-pink-800 shadow">Twist</button>
          </div>
          <div className={` ${prop.txtcolor} my-5`}>
            {trans}
          </div>
        </div>
      </div>         
    </div> 
    </>
  )
}

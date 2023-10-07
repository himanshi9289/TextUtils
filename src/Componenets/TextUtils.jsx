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
      <div className="flex flex-wrap justify-center">
        <div className={` ${prop.txtcolor} p-4 text-2xl font-semibold`}>Enter Text here : </div>
        <div className="lg:w-3/5">
          <div className="">
          <textarea rows="10" placeholder="Hi It's Himanshi" value={text} onChange={textChange} className="p-3 border-2 border-gray-500 rounded-md shadow-gray-600 shadow-sm w-full"></textarea>
          </div>
          <div className="flex flex-wrap">
            <button onClick={upperCase} className="m-4 btn text-white border-green-600 bg-green-600 hover:bg-green-800 shadow">Uppercase</button> 
            <button onClick={lowerCase} className="m-4 btn text-white border-blue-600 bg-blue-600 hover:bg-blue-800 shadow">Lowercase</button>
            <button onClick={copyText} className="m-4 btn text-white border-orange-600 bg-orange-600 hover:bg-orange-800 shadow">Copy</button>
            <button onClick={removeText} className="m-4 btn text-white border-pink-600 bg-pink-600 hover:bg-pink-800 shadow">Remove</button>
        </div>
          <h1 className={`${prop.txtcolor} text-2xl mt-6`}>Your Text Summary </h1><hr className={`${prop.colour==='bg-blue-100'?'bg-black':'bg-white'} h-0.5 mb-2` }/>
          <div className="mb-6"> 
            { (trans.split(" ").filter((elem)=>{return elem.length!==0}).length && (
                <div className={`${prop.txtcolor}`}>
                  {trans.length} characters and {trans.split(" ").length} words. 
                </div>
              ))
            }
          </div>
          <h1 className={`${prop.txtcolor} text-2xl`}>Your Text </h1><hr className={`${prop.colour==='bg-blue-100'?'bg-black':'bg-white'} h-0.5 mb-2 border` }/>
          <div className={` ${prop.txtcolor} my-5`}>
          {trans.length===0 && (
              <div className={`${prop.txtcolor} my-5`}>
                No word Yet
              </div>
            )}
            {trans}
          </div>
        </div>
      </div>         
    </div> 
    </>
  )
}

import propTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className='p-2 flex justify-between text-lg items-center bg-blue-900 text-white shadow-sm shadow-black min-w-full'>
        <div className="flex justify-around w-3/5 ">
            <div className="m-2 p-2 text-2xl cursor-pointer">
                {props.title}
            </div>
            <div className="flex flex-wrap justify-evenly m-2 p-2 w-2/3 ">
                <Link to='/home' className="p-1 hover:underline-offset-4 hover:underline cursor-pointer">{props.subtitle1}</Link>
                <Link to='/about' className="p-1 hover:underline-offset-4 hover:underline cursor-pointer">{props.subtitle2}</Link>
                <Link to='/blogs' className="p-1 hover:underline-offset-4 hover:underline cursor-pointer">{props.subtitle3}</Link>
                <Link to='/contact' className="p-1 hover:underline-offset-4 hover:underline cursor-pointer">{props.subtitle4}</Link>
            </div>
        </div>
        {<div className="w-2/5 flex justify-end flex-wrap text-black items-center">
          <textarea rows="1" placeholder=' Search' className='m-2 p-1 px-2 rounded-md bg-white text-black border-black'>
          </textarea>
          <button className='btn hover:bg-gray-800 text-white border-black bg-black' disabled="disabled">
            Search
          </button>
        </div>}
    </div>
  ) 
}
NavBar.defaultProps = {
  title:"Navbar",
  subtitle1:"Subtitle1",
  subtitle2:"Subtitle2",
  subtitle3:"Subtitle3",
  subtitle4:"Subtitle4"
}
NavBar.propTypes = {
  title:propTypes.string,
  subtitle1:propTypes.string,
  subtitle2:propTypes.string,
  subtitle3:propTypes.string,
  subtitle4:propTypes.string
}


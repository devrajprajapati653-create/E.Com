import React from "react";
import {Link} from "react-router-dom"
import { MdOutlineShoppingBag } from "react-icons/md";

function Header({productCount}) {
    return (
      <header className="w-full flex items-center justify-between">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUIPKYyIlvlXkrrTD95oZGzI0pL2YUWjqbg&s"
          className="h-15 w-40 lg:mx-46"
        />
        <Link to={"/cart"}>
          <div className="flex flex-col items-center mb-5 lg:mx-55">
            <MdOutlineShoppingBag size={40} className="text-red-400"/>
            <span className="-m-7">{productCount}</span>
          </div>
        </Link>
        
        
      </header>
    );
}

export default Header;
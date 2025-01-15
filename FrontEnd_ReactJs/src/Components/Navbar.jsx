import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component{

    render(){
        return(
        <>
        <div className='bg-gray-200 h-full p-4 flex justify-evenly'>

<div className='text-5xl'>Products</div>
<ul className="flex gap-4 items-center ">
    <li><Link to="/">HOME</Link></li>
    <li><Link to="/add">ADD </Link></li>
    <li><a href="/">CONTACT</a></li>
    <li><a href="">EXTRA</a></li>
</ul>
</div>
        </>
        )
    }
}

export default Navbar;
import { memo } from 'react';
import './Header.css'
import shopper from "../assets/Shopper.png"

import { GoSearch } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";

const Header = () => {
  return (
    <>
    <header>
        <div className="Navbar">
            <img src={shopper} alt="" />
            <div className="register">
                <div className="input">
                    <input type="text" name="" id="" placeholder='Search Items' />
                    <button className='search'><GoSearch /></button>
                </div>
                <button className='item'> <HiOutlineShoppingBag className='shopping'/> <p>0 Items Added</p></button>
                <button className='login'> <FaRegUser /> <p>Login or Sign Up</p></button>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="">Features </a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">About</a></li>
            </ul>
        </nav>
    </header>
    </>
  );
};

export default memo(Header);
import { useState, React } from 'react';
import { HiMenu, HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../logo6.png';

const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={'mx-4 cursor-pointer ${classProps}'}>
      {title}
    </li> 
  );
}
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
      <nav className="w-full flex md:justify-center justify-between items-center p-2">
        <div className="md:flex-[0.9] flex-initial justify-center items-center">
           <img src={logo} alt="logo" className="w-32 cursor-pointer"/>
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
            <a href="../App"
               type="button"
               className="bg-[#ffe200] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#e4ca00]"
              >
              <p className="text-base text-black font-semibold"> 
                Open App
              </p>
            </a>
        </ul>
        <div className="flex relative">
        {toggleMenu
            ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer " onClick={() => setToggleMenu(false)}/>
            : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer " onClick={() => setToggleMenu(true)}/>
            }
            {toggleMenu && (
                <a href="../App"
                  type="button"
                  className="bg-[#ffe200] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#e4ca00]"
                  >
                  <p className="text-base text-black font-semibold"> 
                    Open App
                  </p>
                </a>
                )}
        </div>
      </nav>
    );
}

export default Navbar;
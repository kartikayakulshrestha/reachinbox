import React from 'react'
import logoAtDark from '../assets/onlylogodark.png'
import logoAtLight from "../assets/onlylogolight.png"

import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';

import homeD from "../assets/HomeD.png"
import mailD from "../assets/mailD.png"
import boxL from "../assets/boxL.png"
import planeD from "../assets/planeD.png"
import statD from "../assets/StatisticD.png"
import searchD from "../assets/searchD.png"
import menuD from "../assets/menuD.png"
import boxD from "../assets/boxD.png"
const LeftBar = () => {
  const [selectedItem, setSelectedItem] = useState('/'); // Initialize with the default path

  const handleMenuItemClick = (path) => {
    setSelectedItem(path);
    
  };
  const darkview = useSelector((state) => state.counter.darkView)
  return (
    <div className='relative hidden lg:block'>
    <div className={`${darkview?"bg-[#101113] border-[#343A40]":"bg-white border-slate-500"}  overflow-hidden no-scrollbar border-r-2   left-0 top-0 fixed h-screen w-[79px] flex flex-col gap-20 items-center py-6  `}>
      
      <img src={darkview?logoAtDark:logoAtLight} className=" cursor-pointer h-9 rounded-xl object-left overflow-visible" alt="Logo" />
      
      <div className="text-[#AEAEAE] space-y-8">
        
        <div className={` my-1 mx-2  ${selectedItem === '/' ? 'bg-gray-500 rounded-md' : ''} cursor-pointer`} onClick={() => handleMenuItemClick('/')}>
        <img src={homeD} className="h-8 hover:bg-gray-500 rounded-md " />
        </div>
        {darkview?
      <div className={` mx-2  ${selectedItem === '/search' ? 'bg-gray-500 cursor-pointer mx-3 rounded-md' : 'px-1'}`} onClick={() => handleMenuItemClick('/search')}>
      <img src={searchD} className="h-6 hover:bg-gray-500 rounded-md" />
      </div>:null  
      }
        <div className={` mx-2 ${selectedItem === '/mail' ? 'bg-gray-500 cursor-pointer mx-2 rounded-md' : ''}`} onClick={() => handleMenuItemClick('/mail')}>
        <img src={mailD} className="h-5 mx-1 hover:bg-gray-500 rounded-md" />
        </div>
        <div className={` mx-2 ${selectedItem === '/send' ? '  bg-gray-500 rounded-md' : ''} cursor-pointer`} onClick={() => handleMenuItemClick('/send')}>
        <img src={planeD} className="h-6 mx-1 hover:bg-gray-500 rounded-md" />
        </div>
        <div className={` mx-2 cursor-pointer ${selectedItem === '/stack' ? 'bg-gray-500  rounded-md' : ''}`} onClick={() => handleMenuItemClick('/stack')}>
        <img src={menuD} className="h-6 mx-1 hover:bg-gray-500 rounded-md" />
        </div>
        <div className={`p-1 ${selectedItem === '/inbox' ? 'bg-gray-500  rounded-md' : ''} cursor-pointer `} onClick={() => handleMenuItemClick('/inbox')}>
        <img src={darkview?boxD:boxL} className="h-6 mx-1 hover:bg-gray-500 rounded-md" />
        </div>
        <div className={` mx-2 ${selectedItem === '/stacks' ? 'bg-gray-500 rounded-md' : ''} cursor-pointer`} onClick={() => handleMenuItemClick('/stacks')}>
        <img src={statD} className="mx-1 h-6 hover:bg-gray-500 rounded-md" />
        
      </div>
      </div>
        <div className="absolute bottom-3 font-medium text-white bg-green-500 p-2 rounded-full">
        P S
      </div>
      
    </div>
    
    </div>
  )
}

export default LeftBar

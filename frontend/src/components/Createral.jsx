import React from 'react'
import { MdOutlineExpand } from "react-icons/md";
import { RiReplyFill } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import messagedot from "../assets/CenterPart/messagedot.png"
import msgdotlight from "../assets/CenterPart/msgdotlight.png"
import { useSelector } from 'react-redux';
const Createral = () => {
  let darkview = useSelector((state)=> state.counter.darkView)
  return (
    <div className=" z-10 relative text-white h-full">
      {/* {`${darkview?"text-white":"text-black"}`} */}
      <div className={`${darkview?" border-[#33383F]":"order-[#E0E0E0]" } border-b-2 w-full flex justify-between px-8 py-4`}>
        <div>
          <div className={`text-lg ${darkview?"text-white":"text-black"}`} >Orlando</div>
          <div className={`text-sm ${darkview?"text-[#FFFFFF66]":"text-[#343A40B2]"}`}>orladom@gmail.com</div>
        </div>
        <div className="flex items-center space-x-3">
          <div className={`border flex ${darkview?"text-white bg-[#1F1F1F] border-[#343A40]":"text-black bg-white "} rounded-md py-2 px-3 items-center  text-sm`}>
            {darkview?<img src={messagedot} className='h-5 mt-1 mr-2' />:<img src={msgdotlight} className='h-5 mt-1 mr-2' />}Meeting Completed{" "}
            <SlArrowDown className=" ml-2" />
          </div>
          <div className={`${darkview?"text-white bg-[#1F1F1F] border-[#343A40]":"text-black bg-white"} rounded-md py-2 px-3 text-sm flex items-center  border`} >
            Move <SlArrowDown className=" ml-2" />
          </div>
          <div className={`${darkview?"text-white bg-[#1F1F1F] border-[#343A40]":"text-black bg-white"} rounded-md py-2 px-3 text-sm flex items-center  border`}>
            ...
          </div>
        </div>
      </div>
      <div
        className="cursor-pointer flex items-center bottom-0 ml-10 mb-10 bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] rounded-md px-9 py-2 absolute"
        onClick={""}
      >
        <RiReplyFill className="mr-2 text-xl" /> Reply
      </div>
    </div>
  )
}

export default Createral

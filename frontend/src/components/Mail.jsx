import React from 'react'

import greenCircle from "../assets/CenterPart/greenCircle.png"
import { IoIosSend } from "react-icons/io";

import { useSelector } from 'react-redux';
const Mail = ({
    fromEmail,
    subject,
    threadId,
    
  }) => {
    let darkview = useSelector((state)=> state.counter.darkView)
    const trimDown = (subject ,wordCount) => {
        const words = subject.split(" ");
        if (words.length > wordCount) {
          return words.slice(0, wordCount).join(" ") + "...";
        }
        return subject;
      };
      const handleMailClick = () => {
        //loadMail(threadId);
      };
      
      return (
        <div
        /* {`${darkview?"text-white":"text-black"}`} */
          className={`${darkview?"border-[#ffffff25]":"border-[#8b8b8b64]"}   py-3 border-t-2 `}
          onClick={""}
        >
          <div>
            <div className="flex justify-between">
              <div className={`text-lg font-normal ${darkview?"text-white":"text-black"}`}>{fromEmail}</div>
              <div className={`${darkview?"text-[#FCFCFC66]":"text-[#919EAB] font-thin pr-3"}`}>Mar 7</div>
            </div>
            <div className= {`font-normal ${darkview?"text-[#E1E0E0] ":"text-gray-600"}`}>
              {trimDown(subject, 7)}
            </div>
            <div className="flex mt-2">
              <div className={`${darkview?"bg-[#222426]":"bg-[#F0F0F0] "} text-[#57E0A6]  text-sm flex items-center px-3 py-1 rounded-2xl `}>
                
                <img src={greenCircle} className="mr-1 h-3 text-lg"></img>
                Interested
              </div>
              <div className={`text-sm ml-2 flex items-center ${darkview?"text-[#FFFFFF] bg-[#222426]":"text-black bg-[#F0F0F0]"} px-3 py-1 rounded-2xl `}>
                <IoIosSend className="mr-1 text-lg" />
                Campaign Name
              </div>
            </div>
          </div>
        </div>
  )}

export default Mail

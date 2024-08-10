import React from 'react'
import message from "../assets/CenterPart/message.png"
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios"
const Center = () => {
    const darkview = useSelector((state) => state.counter.darkView)
    const dispatch = useDispatch()
    async function call() {
        const token = localStorage.getItem("token");
        let response=await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
          headers: {
            Authorization: token,
          },
        });
        console.log(response.data.data.length)

      }
    useEffect(() => {
        
        call();
        
      }, []);
  return (
    <div>
      <div>
      <div className={`${darkview?"text-white bg-black ": "text-[#5B5F66] bg-[#ECEFF3]"} flex justify-center items-center h-screen flex-col`}>
      <div>
        <img src={message}></img>
      </div>
      <div className="text-2xl my-8">
        It’s the beginning of a legendary sales pipeline
      </div>
      <div className="dark:text-[#9E9E9E] text-[#5B5F66]">
        When you have inbound E-mails you’ll see them here
      </div>
    </div>
      </div>
    </div>
  )
}

export default Center

import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Createral from "./Createral";
import RightSide from "./RightSide";
import Inbox from "./Inbox";

import { AiOutlineLoading } from "react-icons/ai";
const MainGround = () => {
    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    let darkview = useSelector((state)=> state.counter.darkView)
    
    useEffect(() => {
      const interval = setInterval(async () => {
        try {
          const token = localStorage.getItem("token");
          const res = await axios.get(
            "https://hiring.reachinbox.xyz/api/v1/onebox/list",
            {
              headers: {
                Authorization: token,
              },
            }
          );
          
          const r=await res.data.data
          setData(r);
          setLoading(false);
          console.log(datas)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }, 2500);
    
      
      return () => clearInterval(interval);
    }, []);
    
    
    
    if (loading) {
      return (
        <div className={`bg-[#ECEFF3] text-[#5B5F66] ${darkview?"bg-black":"bg-white"} flex h-screen w-full justify-center items-center `}>
          <AiOutlineLoading size={60} className=" animate-spin"/>
        </div>
      );
    }
  
    
  
    return (
        <div className={`flex  fixed lg:ml-[79px] mt-20  ${darkview?"bg-black":"bg-white"} relative`}>
  <div className="grid grid-cols-12 w-full h-[657px] ">
    
    <div className="col-span-3">
        <Inbox />
    </div>
    <div className="col-span-6">
        <Createral />
    </div>
    <div className="col-span-3">
        <RightSide />
    </div>
  </div>
</div>
    );
}

export default MainGround

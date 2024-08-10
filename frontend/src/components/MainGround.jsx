import { useEffect, useState } from "react";
import axios from "axios";
import Createral from "./Createral";
import RightSide from "./RightSide";
import Inbox from "./Inbox";
import { AiOutlineLoading } from "react-icons/ai";
const MainGround = () => {
    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
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
        <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center ">
          <AiOutlineLoading size={60} className=" animate-spin"/>
        </div>
      );
    }
  
    
  
    return (
        <div className="flex z-0 lg:ml-20 mt-20 relative">
  <div className="grid grid-cols-12 w-full   h-[650px] ">
    
    <div className="col-span-3">
        <Inbox />
    </div>
    <div className="col-span-6">
        <Createral />
    </div>
    <div className="col-span-3 bg-green-200">
        <RightSide />
    </div>
  </div>
</div>
    );
}

export default MainGround

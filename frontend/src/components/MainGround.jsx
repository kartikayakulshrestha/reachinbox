import { useEffect, useState } from "react";
import axios from "axios";
import Createral from "./Createral";
import RightSide from "./RightSide";
import Inbox from "./Inbox";
const MainGround = () => {
    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedThread, setSelectedThread] = useState(null);
    console.log(selectedThread);
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
    
      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(interval);
    }, []);
    
    
    
    if (loading) {
      return (
        <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
          Loading ...
        </div>
      );
    }
  
    const loadMail = async (threadId) => {
      setSelectedThread(threadId);
    };
  
    return (
        <div className="flex z-0 lg:ml-20 mt-20 relative">
  <div className="grid grid-cols-12 w-full   h-[650px] ">
    {/* Optional left margin or padding */}
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

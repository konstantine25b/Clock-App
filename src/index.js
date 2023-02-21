import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import "./index.css";
import Clock from "./Clock.js";

// const backlGroundImages = {
//   {id:1, img :}
// }

const ClockApp = () => {
  const [time, setTime] = useState(null);
  const firstRender = useRef(true);
  useEffect(() => {

    const requestTime = async () => {
      const resp1 = await axios.get(
        "http://worldtimeapi.org/api/ip/82.211.165.231.txt"
      );
      

      const data1 = await resp1.data;
     
      console.log(data1);
      
      setTime(data1);
    };
    if (firstRender.current) {
      requestTime();
      firstRender.current = false;
    }
    setInterval(()=>{
      requestTime();
    },1000)
    

  }, []);

  return (<>
    <Clock state = {time}/> 
  </>)
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <ClockApp />
  
);

import React, { useEffect } from "react";
import "./Clock.css";
import img2 from "./bg-image-nighttime.jpg"

export default function Clock(props) {
  //  console.log(props.state)
  let clockTime = (props) => {
    let timeEndingIndex = props.state.search("datetime") + 21;
    return props.state.substr(timeEndingIndex, 8);
  };
  let timeZone = (props)=>{
    let timeZoneEndingIndex1 = props.state.search("timezone") + 10;
    let timeZoneEndingIndex2 = props.state.search("unixtime")
    return props.state.substring(timeZoneEndingIndex1, timeZoneEndingIndex2);
  }
  let dayOfWeek = (props)=>{
      let dayOfWeekEndingIndex =  props.state.search("day_of_week") + 13;
      return props.state.substr(dayOfWeekEndingIndex, 2);
  }
  let dayOfYear = (props)=>{
    let dayOfYearEndingIndex =  props.state.search("day_of_year") + 13;
    return props.state.substr(dayOfYearEndingIndex, 2);
}
let weekNumber = (props)=>{
  let weekNumberEndingIndex =  props.state.search("week_number") + 13;
  return props.state.substr(weekNumberEndingIndex, 2);
}
  let dayTime = (clockTime1) => {
    let hour = Number(clockTime1.substr(0, 2));
    let text1;
    // switch(hour){
    //   case (hour>=7 && hour<12):
    //     text1= "GOOD MORNING, ";
    //     break;
    //   case (hour>=12 && hour<18):
    //     text1= "GOOD AFTERNOON, ";
    //     break;
    //   case (hour>=18 && hour<22):
    //     text1= "GOOD EVENING, ";
    //     break;
    //   case (hour>=22 && hour<7):
    //     text1= "GOOD NIGHT, ";
    //     break;
    // }
    const body1 = document.querySelector(".mainDiv");

    if (hour >= 7 && hour < 12) {
      text1 = "GOOD MORNING, ";
      body1.style.backgroundImage = "./bg-image-daytime.jpg";
    }
    if (hour >= 12 && hour < 18) {
      text1 = "GOOD AFTERNOON, ";
      body1.style.backgroundImage = "./bg-image-daytime.jpg";
    }
    if (hour >= 18 && hour < 22) {
      text1 = "GOOD EVENING, ";
      body1.style.backgroundImage = "./bg-image-nighttime.jpg";
    }
    if ((hour >= 22 && hour < 24) || (hour >= 0 && hour < 7)) {
      text1 = "GOOD NIGHT, ";
      body1.style.backgroundImage = "./bg-image-nighttime.jpg";
    }
    return text1;
  };
  useEffect(() => {}, []);

  return (
    <>
      <div className="mainDiv">
        <div className="topDiv">
          <div className="leftSide">
            
            <div className="leftSideBottom">
              <h2 className="helloH2">
                {props.state ? dayTime(clockTime(props)) : ""} IT'S CURRENTLY:{" "}
              </h2>
              <h1 className="timeH1">{props.state ? clockTime(props) : ""}</h1>
            </div>
          </div>
          <div className="rightSide"></div>
        </div>
        <div className="bottomDiv">
          <div className="bottomLeftSide">
            <div className="bottomLeftTop">
              <h4>CURRENT TIME/ZONE</h4>
              <h2>{props.state? timeZone(props):""}</h2>
            </div>
            <div className="bottomLeftBottom">
              <h4>DAY OF THE WEEK</h4>
              <h2>{props.state? dayOfWeek(props):""}</h2>
            </div>
          </div>
          <div className="bottomRightSide">
            <div className="bottomRightTop">
              <h4>DAY OF THE YEAR</h4>
              <h2>{props.state? dayOfYear(props):""}</h2>
            </div>
            <div className="bottomRightBottom">
              <h4>WEEK NUMBERS</h4>
              <h2>{props.state? weekNumber(props):""}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

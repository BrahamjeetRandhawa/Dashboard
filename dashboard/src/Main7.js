import "./Mainstyle7.css";
import CircleAnimation from "./circleAnimation";
import TypingHeading from "./textAnimation";
import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

function Main7() {

    const [gtmImprovement, setGtmImprovement] = useState([])


    useEffect(() => {
    axios.get("http://localhost:5500/api/data")
  .then(res => setGtmImprovement(res.data.gtmImprovement))
  .catch(err => console.error(err));
  },[]);
 
  const groupedData = [];
  for (let i = 0; i < gtmImprovement.length; i += 1) {
    groupedData.push(gtmImprovement.slice(i, i + 1));
  }


  return (
    <div className="Main-style7">
        <div className="Main-title7">
            <h2>GTM IMPROVEMENT FOCUS <TypingHeading text={gtmImprovement[0]?.heading || ""} speed={75} /></h2>
            <p>Source: Demand Tracker</p>
        </div>

        {groupedData.map((group, groupIndex) => {
         return (
        <Fragment key={groupIndex}>
          
          {group.map((item, index) => (

        <div className="Box7" key={item.id}>
         <CircleAnimation percentage={item.percentage} />
          <h3 className="Main7-h3">{group[0]?.title}</h3>
          <p className="Label7">{item.label}</p>
        </div>

      ))}

        <span className="line"></span>
        </Fragment>
        )
    })}
    </div>
  );
}
        

export default Main7;

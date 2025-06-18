import "./Mainstyle12.css";
import CircleAnimation from "./circleAnimation";
import TypingHeading from "./textAnimation";
import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

function Main12() {

    const [engineerDelight, setEngineerDelight] = useState([])


    useEffect(() => {
    axios.get("http://localhost:5500/api/data")
  .then(res => setEngineerDelight(res.data.engineerDelight))
  .catch(err => console.error(err));
  },[]);
 
  const groupedData = [];
  for (let i = 0; i < engineerDelight.length; i += 2) {
    groupedData.push(engineerDelight.slice(i, i + 2));
  }
 

  return (
    <div className="Main-style12">
        <div className="Main-title12">
            <h2>ENGINEER DELIGHT <TypingHeading text={engineerDelight[0]?.heading || ""} speed={75} /></h2>
            <p>Source: Demand Tracker</p>
        </div>

        {groupedData.map((group, groupIndex) => {
         return (
        <Fragment key={groupIndex}>
          
          {group.map((item, index) => (

        <div className="Box12" key={item.id}>
          <CircleAnimation percentage={item.percentage} />
          <h3 className="Main12-h3">{group[0]?.title}</h3>
          <p className="Label12">{item.label}</p>
        </div>

      ))}

        <span className="line"></span>
        </Fragment>
        )
    })}
    </div>
  );
}
        

export default Main12;

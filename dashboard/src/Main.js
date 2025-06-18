import "./Mainstyle.css";
import CircleAnimation from "./circleAnimation";
import TypingHeading from "./textAnimation";
import React, { Fragment } from "react";


function Main({ financials }) {

 
  const groupedData = [];
  for (let i = 0; i < financials.length; i += 3) {
    groupedData.push(financials.slice(i, i + 3));
  }

 

  return (
    <div className="Main-style">
        <div className="Main-title">
            <h2>Financials<TypingHeading text={financials[0]?.heading || ""} speed={75} /></h2>
            <p>Source: PP</p>
        </div>

        {groupedData.map((group, groupIndex) => {
         return (
        <Fragment key={groupIndex}>
          <h3 className="Main-h3">{group[0]?.title || `Group ${groupIndex + 1}`}</h3>
          {group.map((item) => (

        <div className="Box" key={item.id}>
          <CircleAnimation percentage={item.percentage} />
          <p className="Label">{item.label}</p>
        </div>

      ))}

        <span className="line"></span>
        </Fragment>
        )
    })}
    </div>
  );
}
        

export default Main;

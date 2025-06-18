import "./Mainstyle15.css";
import React, { useEffect, useState, Fragment } from "react";
import TypingHeading from "./textAnimation";
import CircleAnimation from "./circleAnimation";
import axios from "axios";

function Main15() {

    const [governanceInternal, setGovernanceInternal] = useState([])


    useEffect(() => {
    axios.get("http://localhost:5500/api/data")
  .then(res => setGovernanceInternal(res.data.governanceInternal))
  .catch(err => console.error(err));
  },[]);
 
  const groupedData = [];
  for (let i = 0; i < governanceInternal.length; i += 1) {
    groupedData.push(governanceInternal.slice(i, i + 1));
  }
 

  return (
    <div className="Main-style15">
        <div className="Main-title15">
            <h2>GOVERNANCE - INTERNAL FACING<TypingHeading text={governanceInternal[0]?.heading || ""} speed={75} /></h2>
            <p>Source: Demand Tracker</p>
        </div>

        {groupedData.map((group, groupIndex) => {
          
         return (
        <Fragment key={groupIndex}>
          
          {group.map((item, index) => (

        <div className="Box15" key={item.id}>
          <CircleAnimation percentage={item.percentage} />
          <h3 className="Main15-h3">{group[0]?.title}</h3>
          <p className="Label15">{item.label}</p>
        </div>

      ))}

        <span className="line"></span>
        </Fragment>
        )
    })}
    </div>
  );
}
        

export default Main15;
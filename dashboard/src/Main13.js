import "./Mainstyle13.css";
import React, { useEffect, useState, Fragment } from "react";
import TypingHeading from "./textAnimation";
import CircleAnimation from "./circleAnimation";
import axios from "axios";
// import Filter from "./Filter";

function Main13() {

    const [engineerUpskilling, setEngineerUpskilling] = useState([])


    useEffect(() => {
    axios.get("http://localhost:5500/api/data")
  .then(res => setEngineerUpskilling(res.data.engineerUpskilling))
  .catch(err => console.error(err));
  },[]);
 
  const groupedData = [];
  for (let i = 0; i < engineerUpskilling.length; i += 1) {
    groupedData.push(engineerUpskilling.slice(i, i + 1));
  }

  // const colors = ["#ffff00", "#ff0000", "#0000ff"];
  // above 100% green, Between 95 and 100% amber, Below 95% red
  
 

  return (
    <div className="Main-style13">
      {/* <Filter filters={filters} setFilters={setFilters} options={options} /> */}
        <div className="Main-title13">
            <h2>ENGINEER DELIGHT <TypingHeading text={engineerUpskilling[0]?.heading || ""} speed={75} /></h2>
            <p>Source: Demand Tracker</p>
        </div>

        {groupedData.map((group, groupIndex) => {
          
         return (
        <Fragment key={groupIndex}>
          
          {group.map((item, index) => (

        <div className="Box13" key={item.id}>
          <CircleAnimation percentage={item.percentage} />
          <h3 className="Main13-h3">{group[0]?.title}</h3>
          <p className="Label13">{item.label}</p>
        </div>

      ))}

        <span className="line"></span>
        </Fragment>
        )
    })}
    </div>
  );
}
        

export default Main13;

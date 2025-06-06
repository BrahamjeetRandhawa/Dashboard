import "./Mainstyle6.css";
import CircleAnimation from "./circleAnimation";
import TypingHeading from "./textAnimation";
import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
// import Filter from "./Filter";

function Main6() {

    const [northStar, setNorthStar] = useState([])


    useEffect(() => {
    axios.get("http://localhost:5500/api/data")
  .then(res => setNorthStar(res.data.northStar))
  .catch(err => console.error(err));
  },[]);
 
  const groupedData = [];
  for (let i = 0; i < northStar.length; i += 1) {
    groupedData.push(northStar.slice(i, i + 1));
  }

  // const colors = ["#ffff00", "#ff0000", "#0000ff"];
  // above 100% green, Between 95 and 100% amber, Below 95% red
  
 

  return (
    <div className="Main-style6">
      {/* <Filter filters={filters} setFilters={setFilters} options={options} /> */}
        <div className="Main-title6">
            <h2>NORTH STAR POD <TypingHeading text={northStar[0]?.heading || ""} speed={75} /></h2>
            <p>Source: Demand Tracker</p>
        </div>

        {groupedData.map((group, groupIndex) => {
         return (
        <Fragment key={groupIndex}>
          
          {group.map((item, index) => (

        <div className="Box6" key={item.id}>
          <CircleAnimation percentage={item.percentage} />
          <h3 className="Main6-h3">{group[0]?.title}</h3>
          <p className="Label6">{item.label}</p>
        </div>

      ))}

        <span className="line"></span>
        </Fragment>
        )
    })}
    </div>
  );
}
        

export default Main6;

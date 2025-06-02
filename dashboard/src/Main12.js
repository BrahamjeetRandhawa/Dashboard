import "./Mainstyle12.css";
import CircleAnimation from "./circleAnimation";
import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
// import Filter from "./Filter";

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

  // const colors = ["#ffff00", "#ff0000", "#0000ff"];
  // above 100% green, Between 95 and 100% amber, Below 95% red
  
 

  return (
    <div className="Main-style12">
      {/* <Filter filters={filters} setFilters={setFilters} options={options} /> */}
        <div className="Main-title12">
            <h2>ENGINEER DELIGHT <span className="dynamicHeading">{engineerDelight[0]?.heading}</span></h2>
            <p>Source: Demand Tracker</p>
        </div>

        {groupedData.map((group, groupIndex) => {
          const color = (percentage) => {
          if (percentage >= 100) return "#00cc66";
          if (percentage >= 95) return "#ffcc00";
          return "#ff0000";
        };
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

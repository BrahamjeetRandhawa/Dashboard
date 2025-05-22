import "./Mainstyle5.css";
import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
// import Filter from "./Filter";

function Main5() {

    const [thoughtLeadership, setThoughtLeadership] = useState([])


    useEffect(() => {
    axios.get("http://localhost:5500/api/data")
  .then(res => setThoughtLeadership(res.data.thoughtLeadership))
  .catch(err => console.error(err));
  },[]);
 
  const groupedData = [];
  for (let i = 0; i < thoughtLeadership.length; i += 1) {
    groupedData.push(thoughtLeadership.slice(i, i + 1));
  }

  // const colors = ["#ffff00", "#ff0000", "#0000ff"];
  // above 100% green, Between 95 and 100% amber, Below 95% red
  
 

  return (
    <div className="Main-style5">
      {/* <Filter filters={filters} setFilters={setFilters} options={options} /> */}
        <div className="Main-title5">
            <h2>Thought Leadership Demonstration <span className="dynamicHeading">{thoughtLeadership[0]?.heading}</span></h2>
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
          <h3 className="Main5-h3">{group[0]?.title || `Group ${groupIndex + 1}`}</h3>
          {group.map((item, index) => (

        <div className="Box5" key={item.id}>
          <div className="Circle5"
          style={{
            "--color": color(item.percentage),
            "--target-percentage": `${item.percentage * 3.6}deg`
        }}>
            <h4>{item.percentage}</h4>
          </div>
          <p className="Label5">{item.label}</p>
        </div>

      ))}

        <span className="line"></span>
        </Fragment>
        )
    })}
    </div>
  );
}
        

export default Main5;

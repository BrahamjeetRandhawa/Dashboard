import "./Mainstyle7.css";
import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
// import Filter from "./Filter";

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

  // const colors = ["#ffff00", "#ff0000", "#0000ff"];
  // above 100% green, Between 95 and 100% amber, Below 95% red
  
 

  return (
    <div className="Main-style7">
      {/* <Filter filters={filters} setFilters={setFilters} options={options} /> */}
        <div className="Main-title7">
            <h2>GTM Improvement Focus <span className="dynamicHeading">{gtmImprovement[0]?.heading}</span></h2>
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

        <div className="Box7" key={item.id}>
          <div className="Circle7"
          style={{
            "--color": color(item.percentage),
            "--target-percentage": `${item.percentage * 3.6}deg`
        }}>
            <h4>{item.percentage}</h4>
          </div>
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

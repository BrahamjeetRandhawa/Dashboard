import "./Mainstyle5.css";
import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";


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

 

  return (
    <div className="Main-style5">
        <div className="Main-title5">
            <h2>Thought Leadership Demonstration <span className="dynamicHeading">{thoughtLeadership[0]?.heading}</span></h2>
            <p>Source: Demand Tracker</p>
        </div>

        {groupedData.map((group, groupIndex) => {
          return (
            <Fragment key={groupIndex}>
              {group.map((item, index) => {
                const isLast = groupIndex === groupedData.length - 1 && index === group.length - 1;

          const color = (percentage) => {
          if (percentage >= 100) return "#00cc66";
          if (percentage >= 95) return "#ffcc00";
          return "#ff0000";
        };

         return (
          

        <div className="Box5" key={item.id}>
          {isLast ? (
          <div className="Circle5"
          style={{
            "--color": color(item.percentage),
            "--target-percentage": `${item.percentage * 3.6}deg`
        }}>
            <h4>{item.percentage}%</h4>
          </div>
          ) : (
            <h4 className="no-circle_percentage">{item.percentage}</h4>
          )}
          <h3 className="Main5-h3">{group[0]?.title || `Group ${groupIndex + 1}`}</h3>
          <p className="Label5">- {item.label}</p>
        </div>
         );
        })}

        <span className="line"></span>
        </Fragment>
        );
    })}
    </div>
  );
}
        

export default Main5;

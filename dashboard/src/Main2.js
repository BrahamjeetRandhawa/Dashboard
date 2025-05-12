
import "./Mainstyle2.css";
import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

function Main2() {

  const [demandView, setDemandView] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/data")
  .then(res => setDemandView(res.data.demandView))
  .catch(err => console.error(err));
  },[]);


  const groupedData = [];
  for (let i = 0; i < demandView.length; i += 1) {
    groupedData.push(demandView.slice(i, i + 1));
  }

  // const colors = ["#ffff00", "#ff0000", "#0000ff"];
  // above 100% green, Between 95 and 100% amber, Below 95% red
  
 

  return (
    <div className="Main-style2">
        <div className="Main-title2">
            <h2>Demand View</h2>
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
          <h3>{group[0]?.title || `${""}`}</h3>
          {group.map((item, index) => (

        <div className={`Box2 Box2-id-${item.id}`} key={item.id}>
          <div className="Circle2"
          style={{
            "--color": color(item.percentage),
            "--target-percentage": `${item.percentage * 3.6}deg`
        }}>
            <h4>{item.percentage}</h4>
          </div>
          <p>{item.label}</p>
        </div>

      ))}

        <span className="line2"></span>
        </Fragment>
        )
    })}
    </div>
  );
}
        

export default Main2;
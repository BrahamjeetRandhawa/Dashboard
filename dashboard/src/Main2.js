
import "./Mainstyle2.css";
import CircleAnimation from "./circleAnimation";

import React, { useEffect, useState } from "react";
import axios from "axios";

function Main2() {

  const [demandView, setDemandView] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5500/api/data")
  .then(res => setDemandView(res.data.demandView))
  .catch(err => console.error(err));
  },[]);


  const data = demandView

  // const colors = ["#ffff00", "#ff0000", "#0000ff"];
  // above 100% green, Between 95 and 100% amber, Below 95% red
  
 

  return (
    <div className="Main-style2">
        <div className="Main-title2">
            <h2>Demand View <span className="dynamicHeading">{demandView[0]?.heading}</span></h2>
            <p>Source: Demand Tracker</p>
        </div>

        <div className="Main2-grid">
        {data.map((item) => {
          const color = (percentage) => {
          if (percentage >= 100) return "#00cc66";
          if (percentage >= 95) return "#ffcc00";
          return "#ff0000";
        };

         return (
          
        <div className={`Box2 Box2-id-${item.id}`} key={item.id}>
          
          <CircleAnimation percentage={item.percentage} />
          <div className="Text-container2">
          <h3 className="Main2-h3">{item.title}</h3>
          <p className="Label2">{item.label}</p>
          </div>
        </div>

      );
})}
        </div>
    </div>
  );
}
        

export default Main2;
import "./Mainstyle.css";
import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

function Main() {

  const [financials, setFinancials] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/data")
  .then(res => setFinancials(res.data.financials))
  .catch(err => console.error(err));
  },[]);


  const groupedData = [];
  for (let i = 0; i < financials.length; i += 3) {
    groupedData.push(financials.slice(i, i + 3));
  }

  // const colors = ["#ffff00", "#ff0000", "#0000ff"];
  // above 100% green, Between 95 and 100% amber, Below 95% red
  
 

  return (
    <div className="Main-style">
        <div className="Main-title">
            <h2>FINANCIALS</h2>
            <p>Source: PP</p>
        </div>

        {groupedData.map((group, groupIndex) => {
          const color = (percentage) => {
          if (percentage >= 100) return "#00cc66";
          if (percentage >= 95) return "#ffcc00";
          return "#ff0000";
        };
         return (
        <Fragment key={groupIndex}>
          <h3 className="Main-h3">{group[0]?.title || `Group ${groupIndex + 1}`}</h3>
          {group.map((item, index) => (

        <div className="Box" key={item.id}>
          <div className="Circle"
          style={{
            "--color": color(item.percentage),
            "--target-percentage": `${item.percentage * 3.6}deg`
        }}>
            <h4>{item.percentage}</h4>
          </div>
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

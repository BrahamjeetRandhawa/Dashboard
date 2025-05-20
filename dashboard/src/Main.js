import "./Mainstyle.css";
import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

import Filter from "./Filter";

function Main() {

  const [financials, setFinancials] = useState([]);

  const [filters, setFilters] = useState({
    PERIOD: "",
    YEAR: "",
    CLUSTER: "",
    "ACCOUNT NAME": "",
    LOCATION: "",
  });

  const [options, setOptions] = useState({
    PERIOD: [],
    YEAR: [],
    CLUSTER: [],
    "ACCOUNT NAME": [],
    LOCATION: [],
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/data")
  .then(res => {
    const data = res.data.financials;
    setFinancials(data);

    const newOptions = {
      PERIOD: [...new Set(data.map((d) => d.period))],
      YEAR: [...new Set(data.map((d) => d.year))],
      CLUSTER: [...new Set(data.map((d) => d.cluster))],
      "ACCOUNT NAME": [...new Set(data.map((d) => d["ACCOUNT NAME"]))],
      LOCATION: [...new Set(data.map((d) => d.location))],
    };
    setOptions(newOptions);
  })
  .catch(err => console.error(err));
  },[]);

  const filteredFinancials = financials.filter((item) => 
  Object.entries(filters).every(([key, val]) => !val || item[key] === val));


  const groupedData = [];
  for (let i = 0; i < filteredFinancials.length; i += 3) {
    groupedData.push(filteredFinancials.slice(i, i + 3));
  }

  // const colors = ["#ffff00", "#ff0000", "#0000ff"];
  // above 100% green, Between 95 and 100% amber, Below 95% red
  
 

  return (
    <div className="Main-style">
      <Filter filters={filters} setFilters={setFilters} options={options} />
        <div className="Main-title">
            <h2>FINANCIALS <span className="dynamicHeading">{financials[0]?.heading}</span></h2>
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

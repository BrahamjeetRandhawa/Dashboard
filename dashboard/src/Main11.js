import "./Mainstyle11.css";
import CircleAnimation from "./circleAnimation";
import TypingHeading from "./textAnimation";
import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
// import Filter from "./Filter";

function Main11() {

    const [dex, setDex] = useState([])


    useEffect(() => {
    axios.get("http://localhost:5500/api/data")
  .then(res => setDex(res.data.dex))
  .catch(err => console.error(err));
  },[]);
 
  const groupedData = [];
  for (let i = 0; i < dex.length; i += 1) {
    groupedData.push(dex.slice(i, i + 1));
  }

  // const colors = ["#ffff00", "#ff0000", "#0000ff"];
  // above 100% green, Between 95 and 100% amber, Below 95% red
  
 

  return (
    <div className="Main-style11">
      {/* <Filter filters={filters} setFilters={setFilters} options={options} /> */}
        <div className="Main-title11">
            <h2>DEX<TypingHeading text={dex[0]?.heading || ""} speed={75} /></h2>
            <p>Source: Demand Tracker</p>
        </div>

        {groupedData.map((group, groupIndex) => {
         return (
        <Fragment key={groupIndex}>
          
          {group.map((item, index) => (

        <div className="Box11" key={item.id}>
          <CircleAnimation percentage={item.percentage} />
          <h3 className="Main11-h3">{group[0]?.title}</h3>
          <p className="Label11">{item.label}</p>
        </div>

      ))}

        <span className="line"></span>
        </Fragment>
        )
    })}
    </div>
  );
}
        

export default Main11;

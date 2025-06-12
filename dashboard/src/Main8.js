import "./Mainstyle8.css";
import CircleAnimation from "./circleAnimation";
import TypingHeading from "./textAnimation";
import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
// import Filter from "./Filter";

function Main8() {

    const [operationsCustomer, setOperationsCustomer] = useState([])


    useEffect(() => {
    axios.get("http://localhost:5500/api/data")
  .then(res => setOperationsCustomer(res.data.operationsCustomer))
  .catch(err => console.error(err));
  },[]);
 
  const groupedData = [];
  for (let i = 0; i < operationsCustomer.length; i += 1) {
    groupedData.push(operationsCustomer.slice(i, i + 1));
  }

  // const colors = ["#ffff00", "#ff0000", "#0000ff"];
  // above 100% green, Between 95 and 100% amber, Below 95% red
  
 

  return (
    <div className="Main-style8">
      {/* <Filter filters={filters} setFilters={setFilters} options={options} /> */}
        <div className="Main-title8">
            <h2>operations-customer specific<TypingHeading text={operationsCustomer[0]?.heading || ""} speed={75} /></h2>
            <p>Source: Demand Tracker</p>
        </div>

        {groupedData.map((group, groupIndex) => {
         return (
        <Fragment key={groupIndex}>
          
          {group.map((item, index) => (

        <div className="Box8" key={item.id}>
         <CircleAnimation percentage={item.percentage} />
          <h3 className="Main8-h3">{group[0]?.title}</h3>
          <p className="Label8">{item.label}</p>
        </div>

      ))}

        <span className="line"></span>
        </Fragment>
        )
    })}
    </div>
  );
}
        

export default Main8;
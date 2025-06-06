import "./Mainstyle14.css";
import CircleAnimation from "./circleAnimation";
import TypingHeading from "./textAnimation";
import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
// import Filter from "./Filter";

function Main14() {

    const [governanceCustomer, setGovernanceCustomer] = useState([])


    useEffect(() => {
    axios.get("http://localhost:5500/api/data")
  .then(res => setGovernanceCustomer(res.data.governanceCustomer))
  .catch(err => console.error(err));
  },[]);
 
  const groupedData = [];
  for (let i = 0; i < governanceCustomer.length; i += 1) {
    groupedData.push(governanceCustomer.slice(i, i + 1));
  }

  // const colors = ["#ffff00", "#ff0000", "#0000ff"];
  // above 100% green, Between 95 and 100% amber, Below 95% red
  
 

  return (
    <div className="Main-style14">
      {/* <Filter filters={filters} setFilters={setFilters} options={options} /> */}
        <div className="Main-title14">
            <h2>GOVERNANCE - CUSTOMER FACING <TypingHeading text={governanceCustomer[0]?.heading || ""} speed={75} /></h2>
            <p>Source: Demand Tracker</p>
        </div>

        {groupedData.map((group, groupIndex) => {
         return (
        <Fragment key={groupIndex}>
          
          {group.map((item, index) => (

        <div className="Box14" key={item.id}>
          <CircleAnimation percentage={item.percentage} />
          <h3 className="Main14-h3">{group[0]?.title}</h3>
          <p className="Label14">{item.label}</p>
        </div>

      ))}

        
        </Fragment>
        )
    })}
    </div>
  );
}
        

export default Main14;

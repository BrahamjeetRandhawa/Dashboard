import "./Mainstyle4.css";
import CircleAnimation from "./circleAnimation";
import TypingHeading from "./textAnimation";
import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
// import Filter from "./Filter";

function Main4() {

    const [clientPartner, setClientPartner] = useState([])


    useEffect(() => {
    axios.get("http://localhost:5500/api/data")
  .then(res => setClientPartner(res.data.clientPartner))
  .catch(err => console.error(err));
  },[]);
 
  const groupedData = [];
  for (let i = 0; i < clientPartner.length; i += 1) {
    groupedData.push(clientPartner.slice(i, i + 1));
  }

  // const colors = ["#ffff00", "#ff0000", "#0000ff"];
  // above 100% green, Between 95 and 100% amber, Below 95% red
  
 

  return (
    <div className="Main-style4">
      {/* <Filter filters={filters} setFilters={setFilters} options={options} /> */}
        <div className="Main-title4">
            <h2>CLIENT PARTNER FOCUS<TypingHeading text={clientPartner[0]?.heading || ""} speed={75} /></h2>
            <p>Source: Demand Tracker</p>
        </div>

        {groupedData.map((group, groupIndex) => {
         return (
        <Fragment key={groupIndex}>
          
          {group.map((item, index) => (

        <div className="Box4" key={item.id}>
          <CircleAnimation percentage={item.percentage} />
          <h3 className="Main4-h3">{group[0]?.title}</h3>
          <p className="Label4">{item.label}</p>
        </div>

      ))}

        <span className="line"></span>
        </Fragment>
        )
    })}
    </div>
  );
}
        

export default Main4;
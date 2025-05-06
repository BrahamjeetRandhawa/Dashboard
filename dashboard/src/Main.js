import "./Mainstyle.css";
import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

function Main() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/data")
  .then(res => setData(res.data))
  .catch(err => console.error(err));
  },[]);


  const groupedData = [];
  for (let i = 0; i < data.length; i += 3) {
    groupedData.push(data.slice(i, i + 3));
  }

  const colors = ["#ffff00", "#ff0000", "#0000ff"];

  return (
    <div className="Main-style">
        <div className="Main-title">
            <h2>FINANCIALS</h2>
            <p>Source: PP</p>
        </div>

=======
      <div className="Boxes">
        <div className="Box">
          <div className="Circle" style={{
          background: `conic-gradient(#00bfff ${5 * 3.6}deg, #eee 0deg)`
        }}>
          {/* Here the number five needs to be percentage text */}
            <h4>26</h4>
          </div>
          <p>Budget</p>
        </div>
        <div className="Box">
          <div className="Circle" style={{
          background: `conic-gradient(#00bfff ${5 * 3.6}deg, #eee 0deg)`
        }}>
            <h4>28</h4>
          </div>
          <p>Actuals</p>
        </div>
        <div className="Box">
          <div className="Circle" style={{
          background: `conic-gradient(#00bfff ${5 * 3.6}deg, #eee 0deg)`
        }}>
            <h4>108</h4>
          </div>
          <p>Achieved percentage</p>
        </div>


        {groupedData.map((group, groupIndex) => {
          const color = colors[groupIndex % colors.length];


         return (
        <Fragment key={groupIndex}>
          <h3>{group[0]?.title || `Group ${groupIndex + 1}`}</h3>
          {group.map((item, index) => (

        <div className="Box" key={item.id}>
          <div className="Circle"
          style={{background: `conic-gradient(${color} ${item.percentage * 3.6}deg, #eee 0deg)`,
        }}>
            <h4>{item.percentage}</h4>

        <div className="Box">
          <div className="Circle" style={{
          background: `conic-gradient(#00bfff ${5 * 3.6}deg, #eee 0deg)`
        }}>
            <h4>28</h4>
          </div>
          <p>Budget</p>
        </div>
        <div className="Box">
          <div className="Circle" style={{
          background: `conic-gradient(#00bfff ${5 * 3.6}deg, #eee 0deg)`
        }}>
            <h4>28</h4>
          </div>
          <p>Actuals</p>
        </div>
        <div className="Box">
          <div className="Circle" style={{
          background: `conic-gradient(#00bfff ${5 * 3.6}deg, #eee 0deg)`
        }}>
            <h4>108</h4>
 
          </div>
          <p>{item.label}</p>
        </div>

 
      ))}

        <span className="line"></span>
        </Fragment>
        )
    })}

        <div className="Box">
          <div className="Circle" style={{
          background: `conic-gradient(#00bfff ${5 * 3.6}deg, #eee 0deg)`
        }}>
            <h4>26%</h4>
          </div>
          <p>Budget</p>
          </div>
        <div className="Box">
          <div className="Circle" style={{
          background: `conic-gradient(#00bfff ${5 * 3.6}deg, #eee 0deg)`
        }}>
            <h4>28%</h4>
          </div>
          <p>Actuals</p>
          </div>
        <div className="Box">
          <div className="Circle" style={{
          background: `conic-gradient(#00bfff ${5 * 3.6}deg, #eee 0deg)`
        }}>
            <h4>108%</h4>
          </div>
          <p>Achieved percentage</p>
          </div>
      </div>
 
    </div>
  );
}
        

export default Main;

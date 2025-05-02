import "./Mainstyle.css";

function Main() {
  return (
    <div className="Main-style">
        <div className="Main-title">
            <h2>FINANCIALS</h2>
            <p>Source: PP</p>
        </div>
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

        <span className="line"></span>

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
          <p>Achieved percentage</p>
        </div>
        
        <span className="line"></span>

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

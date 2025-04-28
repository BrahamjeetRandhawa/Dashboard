import "./Mainstyle.css";

function Main() {
  return (
    <div className="Main-style">
      <h2>FINANCIALS</h2>
      <h3>Revenue</h3>
      <div className="Boxes">
        <div className="Box">
          <div className="Circle">
            <h4>26</h4>
          </div>
          <p>Budget</p>
        </div>
        <div className="Box">
          <div className="Circle">
            <h4>28</h4>
          </div>
          <p>Actuals</p>
        </div>
        <div className="Box">
          <div className="Circle">
            <h4>108</h4>
          </div>
          <p>Achieved percentage</p>
        </div>

        <span className="line"></span>



        <div className="Box">
          <div className="Circle">
            <h4>28</h4>
          </div>
          <p>Budget</p>
        </div>
        <div className="Box">
          <div className="Circle">
            <h4>28</h4>
          </div>
          <p>Actuals</p>
        </div>
        <div className="Box">
          <div className="Circle">
            <h4>108</h4>
          </div>
          <p>Achieved percentage</p>
        </div>
        
        <span className="line"></span>


        <div className="Box">
          <div className="Circle">
            <h4>26%</h4>
          </div>
          <p>Budget</p>
          </div>
        <div className="Box">
          <div className="Circle">
            <h4>28%</h4>
          </div>
          <p>Actuals</p>
          </div>
        <div className="Box">
          <div className="Circle">
            <h4>108%</h4>
          </div>
          <p>Achieved percentage</p>
          </div>
      </div>
    </div>
  );
}

export default Main;

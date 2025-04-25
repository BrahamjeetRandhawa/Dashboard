import './Filterstyle.css';


function Filter() {
    return (
        <div className="Filter">
            <div className="Filter_title">
            <label htmlFor="Period">PERIOD</label>
            <select name="Period" id="Period">
                <option value="Year">Year</option>
                <option value="2025">2023</option>
                <option value="2024">2022</option>
                <option value="2023">2021</option>
                <option value="2022">2020</option>
            </select>   
            </div> 
            <div className="Filter_title">
            <label htmlFor="Year">YEAR</label>
            <select name="Year" id="Year">
                <option value="Year">Year</option>
                <option value="2024-2025">2025</option>
                <option value="2023-2024">2024</option>
                <option value="2022-2023">2023</option>
                <option value="2021-2022">2022</option>
                <option value="2020-2021">2021</option>
            </select>
            </div>
            <div className="Filter_title">
            <label htmlFor="Cluster">CLUSTER</label>
            <select name="Cluster" id="Cluster">
                <option value="UKISA">UKISA</option>
                <option value="GERG">ERGER</option>
                <option value="RGER">GRE</option>
                <option value="RGER">ERGER</option>
                <option value="GTRRTHY">JYUJUYT</option>
            </select>
            </div>
            <div className="Filter_title">
            <label htmlFor="Account Name">ACCOUNT NAME</label>
            <select name="Region" id="Region">
                <option value="Finastra">finastra</option>
                <option value="GER">GER</option>
                <option value="RGER">RGER</option>
                <option value="RGER">RGER</option>
                <option value="GTRRTHY">GTRRTHY</option>
            </select>
            </div>
            <button className="Filter_button">Filter</button>

            
        </div>
    );
}

export default Filter;
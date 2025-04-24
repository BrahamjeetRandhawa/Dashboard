import './Filterstyle.css';


function Filter() {
    return (
        <div className="Filter">
            <label className= "FilterName" htmlFor="filter">Filter:</label>
            <button type="button">Apply Filter</button>
            <button type="button">Clear Filter</button>
            <button type="button">Save Filter</button>
            <button type="button">Load Filter</button>
            <button type="button">Export Filter</button>
        </div>
    );
}

export default Filter;
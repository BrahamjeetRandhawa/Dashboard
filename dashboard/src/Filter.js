import './Filterstyle.css';


function Filter({ filters, setFilters, options, onFilterApply }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    const handleApply = () => {
        onFilterApply(filters);
    };

    if (!options) return null;
    return (
        <div className="Filters">
            {Object.keys(options).map((key) => (
            <div key={key} className="Filter_title">
            <label htmlFor={key}>{key.toUpperCase()}</label>
            <select name={key} id={key} className='Filter_select' value={filters[key] || ''} onChange={handleChange}>                {options[key].map((val) => (
                    <option key={val} value={val}>
                        {val}
                    </option>
                ))}
            </select>
            </div>
            ))}
            <button className="Filter_button" onClick={handleApply}>Filter</button>

            </div>
    );
}

export default Filter;
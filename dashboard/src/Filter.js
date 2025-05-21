import './Filterstyle.css';


function Filter({ filters, setFilters, options }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    if (!options) return null;
    return (
        <div className="Filter">
            {Object.keys(options).map((key) => (
            <div key={key} className="Filter_title">
            <label htmlFor={key}>{key.toUpperCase()}</label>
            <select name={key} id={key} className='Filter_select' value={filters[key]} onChange={handleChange}>
                <option value="">ALL</option>
                {options[key].map((val) => (
                    <option key={val} value={val}>
                        {val}
                    </option>
                ))}
            </select>
            </div>
            ))}
            <button className="Filter_button">Filter</button>

            </div>
    );
}


//                 <option value="Year">Year</option>
//                 <option value="2025">2023</option>
//                 <option value="2024">2022</option>
//                 <option value="2023">2021</option>
//                 <option value="2022">2020</option>
//             </select>   
//             </div> 


//             <div className="Filter_title">
//             <label htmlFor="Year">YEAR</label>
//             <select name="Year" id="Year" className='Filter_select'>
//                 <option value="Year">Year</option>
//                 <option value="2024-2025">2024-2025</option>
//                 <option value="2023-2024">2023-2024</option>
//                 <option value="2022-2023">2022-2023</option>
//                 <option value="2021-2022">2021-2022</option>
//                 <option value="2020-2021">2020-2021</option>
//             </select>
//             </div>
//             <div className="Filter_title">
//             <label htmlFor="Cluster">CLUSTER</label>
//             <select name="Cluster" id="Cluster" className='Filter_select'>
//                 <option value="UKISA">UKISA</option>
//                 <option value="GERG">ERGER</option>
//                 <option value="RGER">GRE</option>
//                 <option value="RGER">ERGER</option>
//                 <option value="GTRRTHY">JYUJUYT</option>
//             </select>
//             </div>
//             <div className="Filter_title">
//             <label htmlFor="Account Name">ACCOUNT NAME</label>
//             <select name="Region" id="Region" className='Filter_select'>
//                 <option value="Finastra">Finastra</option>
//                 <option value="GER">GER</option>
//                 <option value="RGER">RGER</option>
//                 <option value="RGER">RGER</option>
//                 <option value="GTRRTHY">GTRRTHY</option>
//             </select>
//             </div>
//             <div className="Filter_title">
//             <label htmlFor="Location">LOCATION</label>
//             <select name="Region" id="Region" className='Filter_select'>
//                 <option value="Onsite">Onsite</option>
//                 <option value="Offsite">Offsite</option>
//                 <option value="RGER">RGER</option>
//                 <option value="RGER">RGER</option>
//                 <option value="GTRRTHY">GTRRTHY</option>
//             </select>
//             </div>
//             <button className="Filter_button">Filter</button>

            
//         </div>
//     );
// }

export default Filter;
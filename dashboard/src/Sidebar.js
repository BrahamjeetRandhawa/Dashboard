import './Sidebarstyle.css';

import { NavLink } from 'react-router-dom'; // Import Link from react-router-dom



function Sidebar() {
  return (
    <nav className="Sidebar">
      <ul className="Sidebar_menu">
        <li className="Sidebar_menu-item"><span className='Sidebar_menu-indicator' /><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>FINANCIALS</NavLink></li>
        <li className="Sidebar_menu-item"><span className='Sidebar_menu-indicator' /><NavLink to="/demand" className={({ isActive }) => isActive ? "active-link" : ""}>DEMAND VIEW</NavLink></li>
        <li className="Sidebar_menu-item"><span className='Sidebar_menu-indicator' /><NavLink to="/fulfilment" className={({ isActive }) => isActive ? "active-link" : ""}>FULFILMENT VIEW</NavLink></li>
        <li className="Sidebar_menu-item"><span className='Sidebar_menu-indicator' /><NavLink to="client_partner" className={({ isActive }) => isActive ? "active-link" : ""}>CLIENT PARTNER FOCUS</NavLink></li>
        <li className="Sidebar_menu-item"><span className='Sidebar_menu-indicator' /><NavLink to="/thought_Leadership" className={({ isActive }) => isActive ? "active-link" : ""}> THOUGHT LEADERSHIP DEMONSTRATION</NavLink></li>
        <li className="Sidebar_menu-item"><span className='Sidebar_menu-indicator' /><NavLink to="/north_Star" className={({ isActive }) => isActive ? "active-link" : ""}>NORTH STAR POD</NavLink></li>
        <li className="Sidebar_menu-item"><span className='Sidebar_menu-indicator' /><NavLink to="/GTM_improvement" className={({ isActive }) => isActive ? "active-link" : ""}>GTM IMPROVEMENT FOCUS</NavLink></li>
        <li className="Sidebar_menu-item"><span className='Sidebar_menu-indicator' /><NavLink to="/operations_Customer" className={({ isActive }) => isActive ? "active-link" : ""}>OPERATIONS-CUSTOMER SPECIFIC</NavLink></li>
        <li className="Sidebar_menu-item"><span className='Sidebar_menu-indicator' /><NavLink to="/operations_Hcltech" className={({ isActive }) => isActive ? "active-link" : ""}>OPERATIONS - HCLTECH SPECIFIC</NavLink></li>
        <li className="Sidebar_menu-item"><span className='Sidebar_menu-indicator' /><NavLink to="/customer_Delight" className={({ isActive }) => isActive ? "active-link" : ""}>CUSTOMER DELIGHT</NavLink></li>
        <li className="Sidebar_menu-item"><span className='Sidebar_menu-indicator' /><NavLink to="/dex" className={({ isActive }) => isActive ? "active-link" : ""}>DEX</NavLink></li>
        <li className="Sidebar_menu-item"><span className='Sidebar_menu-indicator' /><NavLink to="/engineer_Delight" className={({ isActive }) => isActive ? "active-link" : ""}>ENGINEER DELIGHT</NavLink></li>
        <li className="Sidebar_menu-item"><span className='Sidebar_menu-indicator' /><NavLink to="/engineer_Upskilling" className={({ isActive }) => isActive ? "active-link" : ""}>ENGINEER UPSKILLING</NavLink></li>
        <li className="Sidebar_menu-item"><span className='Sidebar_menu-indicator' /><NavLink to="/governance_Customer" className={({ isActive }) => isActive ? "active-link" : ""}>GOVERNANCE - CUSTOMER FACING</NavLink></li>
        <li className="Sidebar_menu-item"><span className='Sidebar_menu-indicator' /><a href="#GOVERNANCE-INTERNAL FACING" className={({ isActive }) => isActive ? "active-link" : ""}>GOVERNANCE-INTERNAL FACING</a></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
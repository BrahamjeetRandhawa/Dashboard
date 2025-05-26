import './Sidebarstyle.css';

import { NavLink } from 'react-router-dom'; // Import Link from react-router-dom



function Sidebar() {
  return (
    <nav className="Sidebar">
      <ul className="Sidebar_menu">
        <li className="Sidebar_menu-item"><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}><span className='Sidebar_menu-indicator' />FINANCIALS</NavLink></li>
        <li className="Sidebar_menu-item"><NavLink to="/demand" className={({ isActive }) => isActive ? "active-link" : ""}><span className='Sidebar_menu-indicator' />DEMAND VIEW</NavLink></li>
        <li className="Sidebar_menu-item"><NavLink to="/fulfilment" className={({ isActive }) => isActive ? "active-link" : ""}><span className='Sidebar_menu-indicator' /> FULFILMENT VIEW</NavLink></li>
        <li className="Sidebar_menu-item"><a href="#CLIENT PARTNER FOCUS" className={({ isActive }) => isActive ? "active-link" : ""}><span className='Sidebar_menu-indicator' /> CLIENT PARTNER FOCUS</a></li>
        <li className="Sidebar_menu-item"><NavLink to="/thought_Leadership" className={({ isActive }) => isActive ? "active-link" : ""}><span className='Sidebar_menu-indicator' /> THOUGHT LEADERSHIP DEMONSTRATION</NavLink></li>
        <li className="Sidebar_menu-item"><NavLink to="/north_Star">NORTH STAR POD</NavLink></li>
        <li className="Sidebar_menu-item"><NavLink to="/GTM_improvement">GTM IMPROVEMENT FOCUS</NavLink></li>
        <li className="Sidebar_menu-item"><a href="#OPERATIONS-CUSTOMER SPECIFIC">OPERATIONS-CUSTOMER SPECIFIC</a></li>
        <li className="Sidebar_menu-item"><NavLink to="/operations_Hcltech">OPERATIONS - HCLTECH SPECIFIC</NavLink></li>
        <li className="Sidebar_menu-item"><NavLink to="/customer_Delight">CUSTOMER DELIGHT</NavLink></li>
        <li className="Sidebar_menu-item"><a href="#DEX">DEX</a></li>
        <li className="Sidebar_menu-item"><NavLink to="/engineer_Delight">ENGINEER DELIGHT</NavLink></li>
        <li className="Sidebar_menu-item"><NavLink to="/engineer_Upskilling">ENGINEER UPSKILLING</NavLink></li>
        <li className="Sidebar_menu-item"><NavLink to="/governance_Customer">GOVERNANCE - CUSTOMER FACING</NavLink></li>
        <li className="Sidebar_menu-item"><a href="#GOVERNANCE-INTERNAL FACING">GOVERNANCE-INTERNAL FACING</a></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
import './Sidebarstyle.css';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom



function Sidebar() {
  return (
    <nav className="Sidebar">
      <ul className="Sidebar_menu">
        <li className="Sidebar__menu-item"><Link to="/">FINANCIALS</Link></li>
        <li className="Sidebar__menu-item"><Link to="/demand">DEMAND VIEW</Link></li>
        <li className="Sidebar__menu-item"><Link to="/fulfilment">FULFILMENT VIEW</Link></li>
        <li className="Sidebar__menu-item"><a href="#CLIENT PARTNER FOCUS">CLIENT PARTNER FOCUS</a></li>
        <li className="Sidebar__menu-item"><Link to="/thought_Leadership">THOUGHT LEADERSHIP DEMONSTRATION</Link></li>
        <li className="Sidebar__menu-item"><Link to="/north_Star">NORTH STAR POD</Link></li>
        <li className="Sidebar__menu-item"><Link to="/GTM_improvement">GTM IMPROVEMENT FOCUS</Link></li>
        <li className="Sidebar__menu-item"><a href="#OPERATIONS-CUSTOMER SPECIFIC">OPERATIONS-CUSTOMER SPECIFIC</a></li>
        <li className="Sidebar__menu-item"><a href="#OPERATIONS-HCLTECH SPECIFIC">OPERATIONS-HCLTECH SPECIFIC</a></li>
        <li className="Sidebar__menu-item"><a href="#CUSTOMER DELIGHT">CUSTOMER DELIGHT</a></li>
        <li className="Sidebar__menu-item"><a href="#DEX">DEX</a></li>
        <li className="Sidebar__menu-item"><a href="#ENGINEER DELIGHT">ENGINEER DELIGHT</a></li>
        <li className="Sidebar__menu-item"><a href="#ENGINEER UPSKILLING">ENGINEER UPSKILLING</a></li>
        <li className="Sidebar__menu-item"><a href="#GOVERNANCE-CUSTOMER FACING">GOVERNANCE-CUSTOMER FACING</a></li>
        <li className="Sidebar__menu-item"><a href="#GOVERNANCE-INTERNAL FACING">GOVERNANCE-INTERNAL FACING</a></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
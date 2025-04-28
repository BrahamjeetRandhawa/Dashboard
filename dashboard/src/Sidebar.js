import './Sidebarstyle.css';



function Sidebar() {
  return (
    <nav className="Sidebar">
      <ul className="Sidebar_menu">
        <li className="Sidebar__menu-item"><a href="#FINANCIAL">FINANCIAL</a></li>
        <li className="Sidebar__menu-item"><a href="#DEMAND VIEW">DEMAND VIEW</a></li>
        <li className="Sidebar__menu-item"><a href="#FULFILMENT VIEW">FULFILMENT VIEW</a></li>
        <li className="Sidebar__menu-item"><a href="#CLIENT PARTNER FOCUS">CLIENT PARTNER FOCUS</a></li>
        <li className="Sidebar__menu-item"><a href="#THOUGHT LEADERSHIP DEMONSTRATION">THOUGHT LEADERSHIP DEMONSTRATION</a></li>
        <li className="Sidebar__menu-item"><a href="#NORTH STAR POD">NORTH STAR POD</a></li>
        <li className="Sidebar__menu-item"><a href="#GTM IMPROVEMENT FOCUS">GTM IMPROVEMENT FOCUS</a></li>
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
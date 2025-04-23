import './Sidebarstyle.css';



function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="Sidebar__menu">
        <li className="Sidebar__menu-item"><a href="#financial">Financial</a></li>
        <li className="Sidebar__menu-item"><a href="#about">About</a></li>
        <li className="Sidebar__menu-item"><a href="#contact">Contact</a></li>
        <li className="Sidebar__menu-item"><a href="#services">Services</a></li>
        <li className="Sidebar__menu-item"><a href="#team">Team</a></li>
        <li className="Sidebar__menu-item"><a href="#testimonials">Testimonials</a></li>
        <li className="Sidebar__menu-item"><a href="#blog">Blog</a></li>
        <li className="Sidebar__menu-item"><a href="#faq">FAQ</a></li>
        <li className="Sidebar__menu-item"><a href="#privacy">Privacy Policy</a></li>
        <li className="Sidebar__menu-item"><a href="#terms">Terms of Service</a></li>
        <li className="Sidebar__menu-item"><a href="#careers">Careers</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
import react from "react";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__logo">My Dashboard</div>
      <div className="topbar__menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Topbar;
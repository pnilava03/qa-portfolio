import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Nilava Pal</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#bugs">Bug Reports</a></li>
        <li><a href="#testimonials">Client Feedback</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
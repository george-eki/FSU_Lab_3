import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
    <div className="navbar">
    <div className="container">
    <ul>
     <Link to="/Home">Home</Link>
     <Link to="/Items">Items</Link> 
    </ul>
    </div>
    </div>
    </div>
  );
}

export default Navbar;

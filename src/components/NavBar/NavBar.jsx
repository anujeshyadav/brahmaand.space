import React from "react";
import "../../styles/Navbar.css";
import logo from "../../assets/logos/logo.png";
function NavBar() {
  return (
    <>
     <header className="main">
           <div className=" container">
       <nav className="navbar navbar-expand-lg ">
     
         <a className="navbar-brand" href="#">
          <img src={logo} alt="image" className="logo" />
        </a>
         <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon " /> */}
        </button>
        <div className="collapse navbar-collapse tgl" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <button className="btn rbutton mobile" type="submit">
           <span className='rText'>+ Submit a resource</span> 
          </button>

          <form className="d-flex" role="search">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link rsugnup mobile" aria-current="page" href="#">
                    SignUp
                  </a>
                </li>
                <li className="nav-item">
                <button className="btn rLogin mobile" type="submit">
                 <span className='lText'>LOGIN</span> 
                </button>
                </li>
              </ul>
            </div>
          
          </form>
        </div>
         </nav>
           
            
    </div>
    </header>
    
    </>

  );
}

export default NavBar;

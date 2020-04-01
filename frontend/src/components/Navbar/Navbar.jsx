import React, { useContext } from "react";
import "./Navbar.css";
import { UserContext } from "../../App";
import { isLoggedInContext } from "../..";
import Signout from "../../Auth/Signout";

const Navbar = props => {
  const currentUser = useContext(UserContext);
  const isLoggedIn = useContext(isLoggedInContext);

  console.log(currentUser);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top mb-4">
      <div className="container">
        <a className="navbar-brand logo-font" href="#" id="brand">
          Hash-V
        </a>
        <button
          className="navbar-toggler order-first"
          type="button"
          data-toggle="collapse"
          data-target="#links"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars"></i>
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#account"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <p style={{ color: "white" }} className="pt-3">
            {" "}
            <b> {currentUser.username[0].toUpperCase()}</b>{" "}
          </p>
        </button>

        <div className="collapse navbar-collapse" id="links">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dishes
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Chicken
                </a>
                <a className="dropdown-item" href="#">
                  Mutton/Lamb/Beef 2
                </a>
                <a className="dropdown-item" href="#">
                  Deserts
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Recipies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="account">
          <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {currentUser.username.toUpperCase()}
                    <i
                      className="fa fa-shopping-cart fa-1x"
                      aria-hidden="true"
                    ></i>
                  </a>
            </li>
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Log in
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Register
                  </a>
                </li>
              </>
            ) : (
              <Signout />
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { Component } from "react";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
// import react-router-dom
import { Link } from "react-router-dom";

// import assets
import Logo from "../../assets/img/svg/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { useStateValue } from "../../Context/StateProvider";

export default class Navbar extends Component {

  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            {/* app logo */}
            <Link to="/">
              <img src={Logo} alt="Reach Resort" />
            </Link>

            {/* navbar toggle button */}
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          {/* navbar link */}
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/new-room/">New Room</Link>
            </li>
            <li>
              <Link to="/cars/">Cars</Link>
            </li>
            <li className="cart">
              <Link to="/checkout/"><ShoppingBasketIcon /></Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

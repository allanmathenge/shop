import { Component } from "react";
import { Logo } from "../assets/icons";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav>
          <Link to="/">
            <Logo className="logo" />
          </Link>
          <h3>Welcome to the leading online store</h3>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <Link className="active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/shop/about">About Us</Link>
              </li>
              <li>
                <Link to="/shop/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="mobile" onClick={this.handleClicked}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;

import React from "react";
import "./Nav.css";
import Logo from "../../assets/COMPU_Logo.png";

// Material UI
import Container from "@material-ui/core/Container";

const Nav = () => {
  return (
    <nav>
      <Container maxWidth="xl">
        <img src={Logo} alt=""></img>
        <form>
          <input className="searchInput" type="text" placeholder="Search" />
        </form>
      </Container>
    </nav>
  );
};

export default Nav;

import React from "react";
import { NavLink } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <div style={styles.navbar}>
      <NavLink to={`/`} data-testid="home-page" style={styles.link}>
        <Heading as="h2" size="lg">
          Student Portal
        </Heading>
      </NavLink>

      <div style={styles.rightLinks}>
        <NavLink to={`/student`} data-testid="student-page" style={styles.link}>
          <Link>All Student</Link>
        </NavLink>

        <NavLink to={`/add`} data-testid="add-page" style={styles.link}>
          <Link>Add Student</Link>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;

const styles = {
  navbar: {
    backgroundColor: "#559dc9",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px",
  },
  rightLinks: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    marginRight: "10px",
  },
};

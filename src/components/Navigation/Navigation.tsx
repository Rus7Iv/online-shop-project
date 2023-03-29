import Link from "next/link";
import React from "react";
import { Navigation_styled } from "./Navigation.styled";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <>
      <Navigation_styled>
        <h1>NavBar</h1>
        <div className="nav-items">
          <Link href={"#"} className="link">
            Home
          </Link>

          <Link href={"#"} className="link">
            Contact
          </Link>
          <Link href={"#"} className="link">
            About
          </Link>
        </div>
      </Navigation_styled>
    </>
  );
};

export default Navigation;

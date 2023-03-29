import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import { TopComponents_styled } from "./TopComponents.styled";

const TopComponents = () => {
  return (
    <TopComponents_styled>
      <div className="background"></div>
      <div className="texture">
        <Container className="container-top">
          <h1>Hello!</h1>
        </Container>
      </div>
    </TopComponents_styled>
  );
};

export default TopComponents;

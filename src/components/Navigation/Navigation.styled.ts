import styled from "styled-components";

export const Navigation_styled = styled.div`
    display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: yellow;

  box-shadow: 0 16px 70px -8px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 20px 20px ;
  transition: background 0.3s linear;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  .nav-items{
    justify-content: right;
  };

  .link{
    text-decoration: none;
    color: black;
    font-size: 20px;
    margin: 10px;
  }
`;
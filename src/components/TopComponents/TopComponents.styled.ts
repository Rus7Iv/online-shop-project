import styled from "styled-components";

export const TopComponents_styled = styled.main`
    align-items: center;
    margin: 100px 15px 15px 15px;
    height: 100vh;

    .background {
      width: 100%; 
      position: absolute;
      z-index: 1;
      top: 0px;
    };

    .texture{
      background-attachment: fixed;
      background-repeat: no-repeat;
      
    };

    .container-top {
      padding-left: 0px ;
      padding-right: 0px ;
      height:  300px;
      margin: 0 10px 0 30px;
    }
`;
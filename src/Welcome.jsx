import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Welcome = () => {
  return (
    <FormContainer style={{ height: "98vh" }}>
      <h1 style={{ height: "30vh" }}>
        <br />
        <br />
        WELCOME HERE. THIS IS THE SIMPLE TODO LIST <br />
        <br />
        created by using MERN STACK.
      </h1>

      <Button>
        <Link to={"/home"}>
          <button>GET STARTED</button>
        </Link>
      </Button>
    </FormContainer>
  );
};

export default Welcome;
const FormContainer = styled.div`
  background-image: url("/page.jpg");
  justify-content: center;
  top: 100px;
  display: flex;
  width: 100%;
  color: #4204ee;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
`;
const Button = styled.div`
  align-items: center;
  top: 50px;
  display: flex;
  justify-content: center;
`;

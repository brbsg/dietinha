import React from "react";

import styled from "styled-components";

import logo from "../assets/LogoDietinha.png";

export default function Header() {
  return (
    <Container>
      <img src={logo} />

      <Login></Login>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8vh;
  background-image: linear-gradient(#4ce641, #18bf15);

  img {
    margin: 0;
    height: 80%;
  }
`;

const Login = styled.button`
  border: 0;
  margin: 0;
  margin-right: 20px;

  width: 180px;
  height: 50px;
  border-radius: 8px;

  background-color: white;
`;

import React from "react";
import { Container } from "./style";

const Header: React.FC = () => {
  return (
    <Container>
      <img src="/icons/logo.svg" alt="Logo" />
      <img src="/icons/menu.svg" alt="Menu" />
    </Container>
  );
};

export default Header;

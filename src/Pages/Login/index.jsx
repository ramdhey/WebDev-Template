import React from "react";
import Container from "../../Components/Container";
import ColorModeSwitcher from "../../Components/ColorModeSwitcher";
import Txt from "../../Components/Txt";

const Login = () => {
  return (
    <Container>
      <ColorModeSwitcher />
      <Txt fontSize="xl" mt={4} fontWeight="regular" textAlign="center">
       Login Screen
      </Txt>
    </Container>
  );
};

export default Login;

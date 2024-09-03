import React from "react";
import Container from "../../Components/Container";
import ColorModeSwitcher from "../../Components/ColorModeSwitcher";
import Txt from "../../Components/Txt";

const Register = () => {
  return (
    <Container>
      <ColorModeSwitcher />
      <Txt fontSize="xl" mt={4} fontWeight="regular" textAlign="center">
        Register Screen
      </Txt>
    </Container>
  );
};

export default Register;

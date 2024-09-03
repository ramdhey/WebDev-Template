import { Box } from "@chakra-ui/react";
import theme from "../../Config/theme";

const Container = ({ backgroundColor, children }) => {
  return (
    <Box
      theme={theme}
      // backgroundColor={backgroundColor}
      w={["100%", "100%", "100%"]}
      color="white"
      alignItems={"center"}
      flex={1}
      height={"100vh"}
    >
      {children}
    </Box>
  );
};

export default Container;

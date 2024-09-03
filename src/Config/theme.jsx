import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
});

export default theme;

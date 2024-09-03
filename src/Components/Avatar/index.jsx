import React from "react";
import { Avatar as ChakraAvatar } from "@chakra-ui/react";

const Avatar = ({ src, alt, size = "sm" }) => {
  return <ChakraAvatar size={size} name={alt} src={src} />;
};

export default Avatar;

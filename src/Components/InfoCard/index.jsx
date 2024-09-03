import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import Txt from "../../Components/Txt";

const InfoCard = ({ total, subTitle, buttonLabel, color }) => {
  return (
    <Box
      bg={color}
      p={4}
      borderRadius="md"
      width={{ base: "100%", sm: "240px" }}
      height="140px"
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Txt fontSize="2xl" fontWeight="bold" color={"white"}>
        {subTitle}
      </Txt>
      <Txt fontSize="xl" fontWeight="semiBold" color={"white"}>
        Total : {total}
      </Txt>
      <Button colorScheme="whiteAlpha">
        <Txt color={"white"}>{buttonLabel}</Txt>
      </Button>
    </Box>
  );
};

const InfoCards = ({ data }) => {
  return (
    <Flex
      justifyContent={{ base: "center", sm: "space-between" }}
      wrap="wrap"
      gap={4}
      mt={8}
      alignItems="center"
    >
      {data.map((card, index) => (
        <InfoCard key={index} {...card} />
      ))}
    </Flex>
  );
};

export default InfoCards;

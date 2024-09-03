import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import foto from "../../Assets/Images/foto.png";
import { Link, useLocation } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import Avatar from "../Avatar";
import Txt from "../Txt";
import theme from "../../Config/theme";
import logo from "../../Assets/Logo/itulogo.png";
import ColorModeSwitcher from "../ColorModeSwitcher";

const MobileHeader = ({ navigationItems }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("gray.100", "gray.900");
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Box bg={bg} px={4} boxShadow="lg">
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={2}
          pt={3}
        >
          <IconButton
            bg={"transparent"}
            // _hover={{ bg: "transparent" }}

            size="lg"
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            onClick={onOpen}
          />
          <Flex
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Menu>
              <MenuButton
                as={IconButton}
                bg={"transparent"}
                _hover={{ bg: "transparent" }}
                size="md"
                icon={<Avatar src={foto} alt="Profile" />}
                aria-label="User Profile"
              />
              <MenuList>
                <Box p={4} textAlign="center">
                  <Flex>
                    <Avatar src={foto} alt="Profile" />
                    <Box px={2}>
                      <Txt
                        fontSize="lg"
                        mt={4}
                        fontWeight="bold"
                        textAlign="center"
                        maxLength={15}
                        numberOfLines={1}
                      >
                        Bang Admin
                      </Txt>
                      <Txt
                        fontSize="sm"
                        mt={4}
                        fontWeight="regular"
                        textAlign="center"
                        maxLength={15}
                        numberOfLines={1}
                      >
                        Admin
                      </Txt>
                    </Box>
                  </Flex>
                </Box>
                <MenuDivider />
                <MenuItem color="blue.500" onClick={() => navigate("/profile")}>
                  Akun
                </MenuItem>
                <MenuItem color="red.500">Keluar</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent maxWidth="220px" bg={"#FFC107"}>
          <DrawerCloseButton />
          <DrawerHeader alignItems={"center"}>
            <Flex alignItems="center" justifyContent="center" h="100%">
              <Image
                src={logo}
                alt="Logo"
                boxSize="100px"
                height="100px"
                mb={4}
              />
            </Flex>
          </DrawerHeader>
          <Flex alignItems="center" justifyContent="center">
            <ColorModeSwitcher />
          </Flex>
          <DrawerBody>
            {navigationItems.map((item, index) => {
              const isActive = location.pathname === item.path; // Cek apakah path saat ini sama dengan path item
              return (
                <Flex
                  key={index}
                  alignItems="center"
                  my={2}
                  as={Link}
                  to={item.path}
                  onClick={onClose} // Menutup drawer setelah navigasi
                  bg={isActive ? "#FFFFFF" : "transparent"} // Background untuk item aktif
                  _hover={{ bg: "#FDFDFD" }} // Background saat hover
                  borderRadius="md"
                  p={3}
                  w={"100%"}
                >
                  <Image
                    src={item.icon}
                    boxSize="24px"
                    mr={2}
                    alt={item.title}
                  />
                  <Txt
                    fontSize="lg"
                    mt={0}
                    fontWeight="bold"
                    textAlign="flex-start"
                    numberOfLines={1}
                    color={"black"}
                  >
                    {item.title}
                  </Txt>
                </Flex>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileHeader;

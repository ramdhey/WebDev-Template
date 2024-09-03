import React from "react";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Image,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import theme from "../../Config/theme";
import Txt from "../Txt";
import { Link, useLocation } from "react-router-dom";
import logoLight from "../../Assets/Logo/LightLogo.png";
import logoDark from "../../Assets/Logo/DarkLogo.png";
import logo from "../../Assets/Logo/itulogo.png";
import seeya from "../../Assets/Images/seeya.png";
import foto from "../../Assets/Images/foto.png";
import ColorModeSwitcher from "../ColorModeSwitcher";
import Avatar from "../Avatar";
import { useNavigate } from "react-router-dom";

const DesktopHeader = ({ navigationItems }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const bg = useColorModeValue("gray.100", "gray.900");
  const sidebarBg = "#FFC107";

  return (
    <Flex>
      {/* Sidebar */}
      <Box
        w="220px"
        bg={sidebarBg}
        p={4}
        h="100vh"
        position="fixed"
        top={0}
        left={0}
        display="flex"
        flexDirection="column"
        alignItems="center"
        boxShadow="lg"
      >
        <Image src={logo} alt="Logo" boxSize="125px" height="120px" mb={4} />
        <Flex alignItems="center" justifyContent="center">
          <ColorModeSwitcher />
        </Flex>
        {navigationItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Flex
              key={index}
              alignItems={"flex-start"}
              alignSelf={"flex-start"}
              px={3}
              my={2}
              as={Link}
              to={item.path}
              bg={isActive ? "#FFFFFF" : "transparent"}
              _hover={{ bg: "#FCECBC" }}
              borderRadius="md"
              p={3}
              w={"100%"}
            >
              <Image src={item.icon} boxSize="24px" mr={2} alt={item.title} />
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
      </Box>

      {/* Konten Utama */}
      <Box ml="200px" flex="1" px={4} bg={bg} boxShadow="lg">
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={5}
        >
          <Flex>
            <Image src={seeya} boxSize="28px" mr={1} alt={"see"} />
            <Txt
              fontSize="xl"
              mt={0}
              fontWeight="regular"
              textAlign="center"
              px={2}
              numberOfLines={1}
              maxLength={30}
            >
              Hallo Rama Selamat Datang
            </Txt>
          </Flex>

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
        {/* Tambahkan konten lain di sini */}
      </Box>
    </Flex>
  );
};

export default DesktopHeader;

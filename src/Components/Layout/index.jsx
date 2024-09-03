import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import Header from "../Header";

const Layout = ({ children }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {/* Header akan ditampilkan di setiap halaman kecuali Login dan Registrasi */}
      <Header />
      {/* Konten Utama */}
      <Box
        ml={isMobile ? "0px" : "220px"} // Menyesuaikan margin kiri agar tidak tertimpa oleh sidebar
        p={4}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;

import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import MobileHeader from "../MobileHeader";
import DesktopHeader from "../DesktopHeader";

const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const navigationItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: require("../../Assets/Icons/dashboard.png"),
    },
    {
      title: "Persetujuan",
      path: "/persetujuan",
      icon: require("../../Assets/Icons/approve.png"),
    },
    {
      title: "Arsip",
      path: "/arsip",
      icon: require("../../Assets/Icons/arsip.png"),
    },
    {
      title: "Invoice",
      path: "/invoice",
      icon: require("../../Assets/Icons/invoice.png"),
    },
    {
      title: "Laporan",
      path: "/laporan",
      icon: require("../../Assets/Icons/report.png"),
    },

    {
      title: "Staff",
      path: "/staff",
      icon: require("../../Assets/Icons/karyawan.png"),
    },
    {
      title: "Surat",
      path: "/surat",
      icon: require("../../Assets/Icons/letter.png"),
    },
  ];
  return (
    <>
      {isMobile ? (
        <MobileHeader navigationItems={navigationItems} />
      ) : (
        <DesktopHeader navigationItems={navigationItems} />
      )}
    </>
  );
};

export default Header;

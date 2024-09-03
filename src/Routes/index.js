import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "../Components/Container";
import Txt from "../Components/Txt";
import TitleTab from "../Components/TitleTab";
import Icon from "../Components/IconTab";

// Lazy load pages
const GetStarted = lazy(() => import("../Pages/GetStarted"));
const Login = lazy(() => import("../Pages/Login"));
const Register = lazy(() => import("../Pages/Register"));
const Home = lazy(() => import("../Pages/HomeScreen"));
const Surat = lazy(() => import("../Pages/Letter"));
const Persetujuan = lazy(() => import("../Pages/Approve"));
const Laporan = lazy(() => import("../Pages/Report"));
const Staff = lazy(() => import("../Pages/Employee"));
const Profile = lazy(() => import("../Pages/Profile"));
const Arsip = lazy(() => import("../Pages/Arsip"));
const Invoice = lazy(() => import("../Pages/Invoice"));

const Routerr = () => {
  return (
    <Container>
      <Icon />
      <TitleTab />
      <Suspense fallback={<Txt>Loading...</Txt>}>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/surat" element={<Surat />} />
          <Route path="/persetujuan" element={<Persetujuan />} />
          <Route path="/laporan" element={<Laporan />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/arsip" element={<Arsip />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
export default Routerr;

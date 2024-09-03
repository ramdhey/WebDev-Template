import React, { useState } from "react";
import Container from "../../Components/Container";
import ColorModeSwitcher from "../../Components/ColorModeSwitcher";
import Txt from "../../Components/Txt";
import Header from "../../Components/Header";
import { Box, Select, useColorModeValue } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Layout from "../../Components/Layout";
import InfoCards from "../../Components/InfoCard";

const Dashboard = () => {
  const dataPerbulan = [
    {
      name: "January",
      archived: 4000,
      invoiced: 2400,
      approved: 2400,
    },
    {
      name: "February",
      archived: 3000,
      invoiced: 1398,
      approved: 2210,
    },
    {
      name: "March",
      archived: 2000,
      invoiced: 9800,
      approved: 2290,
    },
    {
      name: "April",
      archived: 2780,
      invoiced: 3908,
      approved: 2000,
    },
    {
      name: "May",
      archived: 1890,
      invoiced: 4800,
      approved: 2181,
    },
    {
      name: "June",
      archived: 2390,
      invoiced: 3800,
      approved: 2500,
    },
    {
      name: "July",
      archived: 3490,
      invoiced: 4300,
      approved: 2100,
    },
  ];

  const dataPerminggu = [
    {
      name: "Week 1",
      archived: 120,
      invoiced: 90,
      approved: 60,
    },
    {
      name: "Week 2",
      archived: 100,
      invoiced: 95,
      approved: 65,
    },
    // Tambahkan data untuk minggu lainnya
  ];

  const dataPerhari = [
    {
      name: "Day 1",
      archived: 20,
      invoiced: 15,
      approved: 10,
    },
    {
      name: "Day 2",
      archived: 22,
      invoiced: 17,
      approved: 12,
    },
    // Tambahkan data untuk hari lainnya
  ];

  const infoCardsData = [
    {
      subTitle: "Staff",
      total: "50",
      buttonLabel: "Lihat",
      color: "#ffb212", // Warna biru gelap
    },
    {
      subTitle: "Surat Diarsipkan",
      total: "1000",
      buttonLabel: "Lihat",
      color: "#059669", // Warna oranye
    },
    {
      subTitle: "Invoice",
      total: "900",
      buttonLabel: "Lihat",
      color: "#133db5", // Warna hijau
    },
    {
      subTitle: "Belum Approve",
      total: "3",
      buttonLabel: "Lihat",
      color: "#7C3AED", // Warna ungu
    },
  ];

  const [data, setData] = useState(dataPerbulan);
  const [period, setPeriod] = useState("monthly");

  const handlePeriodChange = (event) => {
    const period = event.target.value;
    setPeriod(period);
    if (period === "weekly") {
      setData(dataPerminggu);
    } else if (period === "daily") {
      setData(dataPerhari);
    } else {
      setData(dataPerbulan);
    }
  };

  const selectTextColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const selectBgColor = useColorModeValue("white", "gray.700");
  const selectBorderColor = useColorModeValue("gray.300", "gray.600");
  return (
    <Layout>
      <InfoCards data={infoCardsData} />
      <Box mt={4} textAlign="center">
        <Select
          width="200px"
          value={period}
          onChange={handlePeriodChange}
          mb={4}
          color={selectTextColor}
          bg={selectBgColor}
          borderColor={selectBorderColor}
          _focus={{
            borderColor: selectBorderColor,
          }}
        >
          <option value="monthly">Per Bulan</option>
          <option value="weekly">Per Minggu</option>
          <option value="daily">Per Hari</option>
        </Select>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="archived" stroke="#8884d8" />
            <Line type="monotone" dataKey="invoiced" stroke="#82ca9d" />
            <Line type="monotone" dataKey="approved" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Layout>
  );
};

export default Dashboard;

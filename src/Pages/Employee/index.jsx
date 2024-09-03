import React from "react";
import Layout from "../../Components/Layout";
import Txt from "../../Components/Txt";
import Tabel from "../../Components/Table";

const Employee = () => {
  const employeeData = [
    {
      name: "Rama Dhea",
      employeeId: "E001",
      gender: "Male",
      position: "Manager",
      dateJoined: "2022-01-10",
    },
    {
      name: "Indah Murtiningsih",
      employeeId: "E002",
      gender: "Female",
      position: "Staff",
      dateJoined: "2023-03-21",
    },
    {
      name: "Ali Keren",
      employeeId: "E003",
      gender: "Male",
      position: "Staff",
      dateJoined: "2021-11-15",
    },
    // Tambahkan data lainnya sesuai kebutuhan
  ];

  const columns = [
    { label: "Nama Lengkap", accessor: "name" },
    { label: "ID Karyawan", accessor: "employeeId", isHighlighted: true },
    { label: "Jenis Kelamin", accessor: "gender" },
    { label: "Jabatan", accessor: "position", isHighlighted: true },
  ];

  const filters = [
    { label: "Male", value: "male", accessor: "gender" },
    { label: "Female", value: "female", accessor: "gender" },
    { label: "Manager", value: "manager", accessor: "position" },
    { label: "Staff", value: "staff", accessor: "position" },
  ];

  const sorts = [
    { label: "Date Joined", value: "dateJoined", accessor: "dateJoined" },
    { label: "Name", value: "name", accessor: "name" },
  ];
  return (
    <Layout>
      <Tabel
        employees={employeeData}
        columns={columns}
        filters={filters}
        sorts={sorts}
        actions={["view", "delete"]}
      />
    </Layout>
  );
};

export default Employee;

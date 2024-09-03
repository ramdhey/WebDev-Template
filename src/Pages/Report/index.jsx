import React from "react";
import Layout from "../../Components/Layout";
import Txt from "../../Components/Txt";
import Tabel from "../../Components/Table";

const Report = () => {
  const employeeData = [
    {
      name: "Surat Jalan Truk 23",
      idDocument: "E001",
      type: "Surat Jalan",
      upload: "2022-02-07",
      approve: "2022-02-08",
      dateJoined: "2022-01-10",
    },
    {
      name: "Surat Keluar Truk 23",
      idDocument: "E002",
      type: "Surat Keluar",
      upload: "2022-02-07",
      approve: "2022-02-08",
      dateJoined: "2023-03-21",
    },
    {
      name: "Tagihan Semen",
      idDocument: "E003",
      type: "Tagihan Vendor",
      upload: "2022-09-10",
      approve: "2022-09-11",
      dateJoined: "2021-11-15",
    },
    // Tambahkan data lainnya sesuai kebutuhan
  ];

  const columns = [
    { label: "Periode", accessor: "name" },
    { label: "Jumlah Arsip", accessor: "idDocument", isHighlighted: true },
    { label: "Jumlah Invoice", accessor: "type" },
    { label: "Jumlah Surat", accessor: "upload", isHighlighted: true },
    { label: "Jumlah Approve", accessor: "approve" },
    { label: "Jumlah Reject", accessor: "upload", isHighlighted: true },
  ];

  const filters = [
    { label: "Male", value: "male", accessor: "type" },
    { label: "Female", value: "female", accessor: "type" },
    { label: "Manager", value: "manager", accessor: "upload" },
    { label: "Staff", value: "staff", accessor: "approve" },
  ];

  const sorts = [
    { label: "Id Document", value: "idDocument", accessor: "idDocument" },
    { label: "Name", value: "name", accessor: "name" },
    { label: "Tanggal Approve", value: "approve", accessor: "approve" },
  ];
  return (
    <Layout>
      <Tabel
        employees={employeeData}
        columns={columns}
        filters={filters}
        sorts={sorts}
        actions={["view", "print"]}
      />
    </Layout>
  );
};

export default Report;

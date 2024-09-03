import React from "react";
import Layout from "../../Components/Layout";
import Txt from "../../Components/Txt";
import Tabel from "../../Components/Table";

const Approve = () => {
  const employeeData = [
    {
      name: "Surat Jalan Truk 23",
      idDocument: "E001",
      type: "Surat Jalan",
      upload: "2022-02-07",
      approve: "Rejected",
      dateJoined: "2022-01-10",
    },
    {
      name: "Surat Keluar Truk 23",
      idDocument: "E002",
      type: "Surat Keluar",
      upload: "2022-02-07",
      approve: "Approve",
      dateJoined: "2023-03-21",
    },
    {
      name: "Tagihan Semen",
      idDocument: "E003",
      type: "Tagihan Vendor",
      upload: "2022-09-10",
      approve: "Waiting",
      dateJoined: "2021-11-15",
    },
    // Tambahkan data lainnya sesuai kebutuhan
  ];

  const columns = [
    { label: "Nama Arsip", accessor: "name" },
    { label: "Nomor Document", accessor: "idDocument", isHighlighted: true },
    { label: "Jenis Document", accessor: "type" },
    { label: "Tanggal Upload", accessor: "upload", isHighlighted: true },
    { label: "Status", accessor: "approve" },
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
        actions={["view", "delete"]}
      />
    </Layout>
  );
};

export default Approve;

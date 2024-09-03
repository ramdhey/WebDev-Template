import React from "react";
import Layout from "../../Components/Layout";
import Txt from "../../Components/Txt";
import Tabel from "../../Components/Table";

const Invoice = () => {
  const employeeData = [
    {
      name: "Surat Jalan Truk 23",
      idDocument: "E001",
      type: "Surat Jalan",
      upload: "2022-02-09",
      ket: "Sudah Upload kemarin",
      dateJoined: "2022-01-10",
    },
    {
      name: "Surat Keluar Truk 23",
      idDocument: "E002",
      type: "Surat Keluar",
      upload: "2022-02-09",
      ket: "Test",
      dateJoined: "2023-03-21",
    },
    {
      name: "Tagihan Semen",
      idDocument: "E003",
      type: "Tagihan Vendor",
      upload: "2022-09-11",
      ket: "Yang ini tagihan",
      dateJoined: "2021-11-15",
    },
    // Tambahkan data lainnya sesuai kebutuhan
  ];

  const columns = [
    { label: "Nama Invoice", accessor: "name" },
    { label: "Nomor Invoice", accessor: "idDocument", isHighlighted: true },
    { label: "Nomor Document", accessor: "idDocument" },
    { label: "Jenis Document", accessor: "type", isHighlighted: true },
    { label: "Tanggal Terbit", accessor: "upload" },
    { label: "Keterangan", accessor: "ket", isHighlighted: true },
  ];

  const filters = [
    { label: "Male", value: "male", accessor: "type" },
    { label: "Female", value: "female", accessor: "type" },
    { label: "Manager", value: "manager", accessor: "upload" },
    { label: "Staff", value: "staff", accessor: "ket" },
  ];

  const sorts = [
    { label: "Id Document", value: "idDocument", accessor: "idDocument" },
    { label: "Name", value: "name", accessor: "name" },
    { label: "Keterangan", value: "ket", accessor: "ket" },
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

export default Invoice;

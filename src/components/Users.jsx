import { Popconfirm, Table } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import "./Users.scss";
import { DeleteOutlined } from "@ant-design/icons";
import sendNotification from "../common/sendNotification";
import moment from "moment";
import axios from "axios";

// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     filters: [
//       {
//         text: "Joe",
//         value: "Joe",
//       },
//       {
//         text: "Category 1",
//         value: "Category 1",
//       },
//       {
//         text: "Category 2",
//         value: "Category 2",
//       },
//     ],
//     filterMode: "tree",
//     filterSearch: true,
//     onFilter: (value, record) => record.name.startsWith(value),
//     width: "30%",
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     sorter: (a, b) => a.age - b.age,
//   },
//   {
//     title: "Email",
//     dataIndex: "email",
//     filters: [
//       {
//         text: "London",
//         value: "London",
//       },
//       {
//         text: "New York",
//         value: "New York",
//       },
//     ],
//     onFilter: (value, record) => record.email.startsWith(value),
//     filterSearch: true,
//     width: "40%",
//   },
// ];

const Users = () => {
  const [users, setUsers] = useState([]);

  // Reducing duplicate names and emails from filter dropdown UI
  const uniqueNames = [
    ...new Set(users.map((user) => user.name).filter(Boolean)),
  ];
  const uniqueEmails = [
    ...new Set(users.map((user) => user.email).filter(Boolean)),
  ];

  // User Delete Handler
  const handleUserDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          sendNotification(
            "success",
            "Success",
            `Coffee item deleted successfully!`,
            "topRight"
          );
          const filteredUserData = users.filter((user) => user._id !== id);
          setUsers(filteredUserData);
        }
      })
      .catch((err) => {
        console.log(err);
        sendNotification("error", "Error", err.message, "topRight");
      });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filters: uniqueNames.map((name) => ({ text: name, value: name })),
      filterSearch: true,
      onFilter: (value, record) => record?.name?.startsWith(value),
      width: "30%",
    },
    {
      title: "Email",
      dataIndex: "email",
      filters: uniqueEmails.map((email) => ({
        text: email,
        value: email,
      })),
      onFilter: (value, record) => record?.email?.startsWith(value),
      filterSearch: true,
      width: "30%",
    },
    {
      title: "Last Login",
      dataIndex: "lastLoggedAt",
      width: "30%",
      render: (text) => moment(text).format("MMMM D, YYYY h:mm A"),
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "5%",
      render: (_, record) => (
        <Popconfirm
          title="Sure to Delete?"
          onConfirm={() => handleUserDelete(record.key)}
        >
          <div style={{ textAlign: "center" }}>
            <DeleteOutlined />
          </div>
        </Popconfirm>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((data) => {
      //Unique key for table key
      const usersWithKeys = data.data.map((user) => ({
        ...user,
        key: user._id,
      }));
      setUsers(usersWithKeys);
    });
  }, []);

  return (
    <div className="users-area">
      <Table
        className="users-table"
        // bordered
        // size="small"
        columns={columns}
        dataSource={users}
        // onChange={onChange}
      />
    </div>
  );
};

export default Users;

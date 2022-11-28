import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GiCharacter } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import getMemberData from "../../APIs/getMemberData";
import getHouseholdData from "../../APIs/getHouseholdData";
import { useNavigate } from "react-router";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { shadows } from '@mui/system';

import './Dashboard.css';

const Dashboard = ({ id, loggedin }) => {
  const [familyId, setFamilyId] = useState();
  const [sourceData, setSourceData] = useState({ familyMembers: [] });
  const [perData, setPerData] = useState();
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const user = await getMemberData(id);
      setFamilyId((await user.json()).familyId);
    }
    if (loggedin) {
      fetchData();
    } else {
      navigate("../signin", { replace: true });
    }
  }, [id, loggedin, navigate]);

  useEffect(() => {
    const fetch = async () => {
      const user = await getMemberData(id);
      setPerData(await user.json());
    };
    if (loggedin) {
      fetch();
    } else {
      navigate("../signin", { replace: true });
    }
  }, []);
  console.log(perData);
  useEffect(() => {
    async function fetchData() {
      const response = await getHouseholdData(familyId);
      const dat = await response.json();
      setSourceData(dat);
    }
    if (familyId) {
      fetchData();
    }
  }, [familyId]);

  const headers = [
    "Users",
    "Status",
    "Utilities",
    "School",
    "Groceries",
    "Rent",
    "Clothes",
    "Subscriptions",
    "Entertainment",
    "Miscellaneous",
  ];

  const getTable = (users) => {
    const data = [];

    for (let i = 0; i < users.length; i++) {
      data.push(getMemberRow(users[i], i));
    }

    return data;
  };

  const totalUsed = (users) => {
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
      sum += users[i]?.used ?? 0;
    }
    return sum;
  };

  const totalAllowance = (users) => {
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
      sum += users[i]?.allowance ?? 0;
    }
    return sum;
  };

  const getMemberRow = (user, index) => {
    const data = [];
    const id = user._id;
    data.push(
      <td class="p-3 text-sm text-gray-700">
        <a href="#" class="font-bold text-blue-500 hover:underline">
          {user.name}
        </a>
      </td>
    );
    const { admins } = sourceData;
    const find = admins.find((value) => value._id === id);
    if (admins && find) {
      data.push(
        <td>
          <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
            Owner
          </span>
        </td>
      );
    } else {
      data.push(
        <td>
          <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
            Member
          </span>
        </td>
      );
    }

    for (let i = 2; i < headers.length; i++) {
      console.log(user.categories);
      const amount =
        user.categories.find(
          ({ category }) => category.toUpperCase() === headers[i].toUpperCase()
        )?.totalAmount ?? 0;
      data.push(<td class="p-3 text-sm text-gray-700">{amount.toFixed(2)}</td>);
    }
    return <tr class={index % 2 ? "bg-[#c8b7e9]" : "bg-gray-200"}>{data}</tr>;
  };

  return (
    <div>
      <div className="px-[100px] grid grid-cols-2">
        <div className="welcome-text">
          {/* <p>{familyId}</p> */}
          <h3 className=" flex text-3xl text-[rgb(161,93,244)] my-18 mx-[100px] text1">
            Welcome Back,{" "}
            <span className="text-[#000000] font-bold mt-[-50] name">
              {"  "}
              {perData?.name}
            </span>
            !
          </h3>
        </div>
        <div className="box-top"></div>
        {/* <div className="flex px-[475px] pt-14 py-[140px] space-x-20">
          <button>
            <BsCurrencyDollar size={30}></BsCurrencyDollar>
          </button>
          <button>
            <AiFillSetting size={30}></AiFillSetting>
          </button>
          <button>
            <GiCharacter size={30}></GiCharacter>
          </button>
        </div> */}
      </div>
      <Card elevation={3} style={{maxWidth:1100, margin:"0 auto", padding:"70px 20px"}} sx={{boxShadow: 3, border: "1px black"}} sy={{boxShadow: 3, border: "1px black"}} className="card1">
      <div className="grid grid-rows-3 grid-col-2 w-full flex inside-card">
        <div className="mx-[200px] my-[-25px] text-5xl font-bold budget-text ">
          Budget:{" "}
          $
            {totalAllowance(sourceData.familyMembers) -
              totalUsed(sourceData.familyMembers)}
        </div>
        <div className="empty-div"></div>
        
        {/* <div className="flex flex-row-2">
          <div className="text-[#008000] mx-[200px] my-[-30px] text-7xl font-bold box-content h-20 w-flex p-4 border-4">
            $
            {totalAllowance(sourceData.familyMembers) -
              totalUsed(sourceData.familyMembers)}
          </div>
        </div> */}

        <div className="flex text-4xl font-light mx-[200px] my-[-25px]">
          {/* Remaining from a ${totalAllowance(sourceData.familyMembers)} budget */}
          Expense Summary
        </div>
        <table class="mx-[200px] my-[-15px] w-[900px]">
          <thead class="head border-b-2 border-gray-300">
            <tr>
              {headers.map((header) => (
                <th class="p-3 text-xl font-semibold tracking-wide">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table-body">{getTable(sourceData.familyMembers)}</tbody>
        </table>
        <a href="/psdash" className="text-sm text-neutral-600 see-more">
            see more
          </a>
      </div>
      </Card>
    </div>
  );
};

export default Dashboard;

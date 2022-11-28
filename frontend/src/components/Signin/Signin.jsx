import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {Typography, Card, CardContent,Grid, TextField} from '@material-ui/core';
import { shadows } from '@mui/system';
import '../Signup/Signup.css';
import './Signin.css';
import { login } from "../../APIs/LoginAPI";
import Cookies from "universal-cookie";
import helpImg from "../../image/signup-img.svg";

function Signin({ loggedin, setLogin }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const cookies = new Cookies();

  const submit = async () => {
    console.log("here");
    await login(email, password);

    if (cookies.get("userid")) {
      setLogin(true);
    }
  };

  useEffect(() => {
    if (loggedin) {
      navigate("../PsDash", { replace: true });
    }
  });

  return (
    <>
      {/* <div className="h-[800px] bg-gray-50 flex flex-col justify-center">
        <div className="mx-auto">
        <div className="text font-extrabold text-5xl py-2">
              {" "}
              Log In To Your Account{" "}
            </div>
          <div className="text-2xl font-medium text-gray-900 mt-2 text-center">
            {" "}
            Don't have an account yet?{" "}
            <a className="text-[#22a7ff]" href="/signup">
              Sign Up
            </a>
          </div>
        </div>
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
          <form
            action=""
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <div>
              <label
                htmlFor=""
                className="text-m text-left font-bold text-gray-600 block"
              >
                Email
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-m text-left font-bold text-gray-600 block"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1 "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-8 h-8 rounded border-gray-300 focus:ring-[#22a7ff] dark:focus:ring-[#22a7ff] dark:ring-offset-gray-800 focus:ring-2"
                ></input>
                <label htmlFor="" className="ml-2 text-m text-gray-600">
                  Remember Me
                </label>
              </div>
              <div>
                <a href="/help" className="font-medium text-m text-[#22a7ff]">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div>
              <button className="w-full py-2 px-4 bg-[#22a7ff] hover:bg-[#FFB200] rounded-md text-white text-m">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div> */}

      {/* Eshan wala code */}
      {/* <div className="bg-50 flex flex-col justify-center marginMain">
          <div className="divFlex">
          <div className="imDiv">
            <img className="im" src={helpImg}></img>
          </div>
          <div className="divFlexColumn">
          <div className="mx-auto marginSignin">
            <div className="text font-extrabold text-5xl py-2">
              {" "}
              Log In To Your Account{" "}
            </div>
            <div className="text-2xl font-medium text-gray-900 mt-2 text-center ">
              {" "}
              Already have an account?{" "}
              <a className="text-[#22a7ff]" href="/signin">
                Log In
              </a>
            </div>
          </div>
          <div className="max-w-lg w-full mx-auto mt-4 bg-white p-1 borderSignup" >
            <form
              action=""
              className="space-y-6 form1 dabba marginTopTop"
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              <div>
                <label
                  htmlFor=""
                  className="text-m text-left font-bold text-gray-600 block"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1 padding"
                  value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-m text-left font-bold text-gray-600 block"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded mt-1 padding"
                  onChange={(changeEvent) =>
                    setPassword(changeEvent.target.value)
                  }
                  value={password}
                />
              </div>
              <div>
                <button className="w-full py-2 px-4 bg-[#22a7ff] hover:bg-[#FFB200] rounded-md text-white text-m padding marginTop">
                  Submit
                </button>
              </div>
            </form>
          </div>
          </div>
          </div>
        </div> */}

<div className="bg-50 flex flex-col justify-center marginMain">
          <div className="divFlex">
          <div className="imDiv">
            <img className="im" src={helpImg}></img>
          </div>
          <div className="divFlexColumn card1 w-full flex">
            <Card elevation={2} style={{maxWidth:400, margin:"0 auto", padding:"15px 35px"}} sx={{boxShadow: 1}} className="card1">
              <CardContent>
                <Grid container spacing={1}>
            <div className="text font-extrabold text-5xl mx-auto card1 title ">
              {" "}
              Log In{" "}
            </div>
            
          <div className="max-w-lg w-full mx-auto bg-white  borderSignup" >
          <form action=""
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}>
              <div>
              <Grid justify="space-around" spacing={0} xs={12} container className="text-box">
                  <TextField type="email" label="Email" variant="outlined" fullWidth required value={email}
                onChange={(e) => setEmail(e.target.value)}className="padding" inputProps={{style: {fontSize: 15}}} InputLabelProps={{style: {fontSize: 15}}} />
              </Grid>
              <Grid xs={12} justify="space-around" spacing={0} container className="text-box">
                  <TextField type="password" label="Password" variant="outlined" fullWidth required onChange={(changeEvent) =>
                    setPassword(changeEvent.target.value)
                  }
                  value={password}  className="padding" inputProps={{style: {fontSize: 15}}} InputLabelProps={{style: {fontSize: 15}}} />
              </Grid>
              </div>
              <div>
                <button className="w-full py-2 px-4 bg-[#22a7ff] hover:bg-[#FFB200] rounded-md text-white text-m padding button1" value="send">
                  Submit
                </button>
              </div>
            </form>
            <div className="text-2xl font-medium text-gray-900 mt-2 text-center down-text ">
               {" "}
               Don't have an account yet?{" "}
               <a className="text-[#22a7ff]" href="/signup">
              Sign Up
            </a>
             </div>
          </div>
          </Grid>
          </CardContent>
          </Card>
          </div>
          </div>
        </div>
    </>
  );
}

export default Signin;

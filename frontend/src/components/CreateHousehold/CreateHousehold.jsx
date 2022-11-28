import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {Typography, Card, CardContent,Grid, TextField} from '@material-ui/core';
import { createFamily } from "../../APIs/CreateHousehold";

import famImage from '../../image/family.svg';
import './CreateHousehold.css';
import { convertLength } from "@mui/material/styles/cssUtils";

const CreateHousehold = ({ loggedin }) => {
  const [familyName, setFamilyName] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    console.log("here");
    await createFamily(familyName);
    navigate("../dashboard", { replace: true });
  };

  useEffect(() => {
    if (!loggedin) {
      navigate("../login", { replace: true });
    }
  });

  return (
    <>
      {/* <div className="h-[800px] bg-gray-50 flex flex-col justify-center">
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
                className="text-sm text-left font-bold text-gray-600 block"
              >
                Family's Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                onChange={(changeEvent) =>
                  setFamilyName(changeEvent.target.value)
                }
                value={familyName}
              />
            </div>
            <div>
              <button className="w-full py-2 px-4 bg-[#8b74bd] hover:bg-[#7953ab] rounded-md text-white text-sm">
                Create
              </button>
            </div>
          </form>
        </div>
      </div> */}

      <div className="bg-50 flex flex-col justify-center marginMain">
          <div className="divFlex">
          <div className="imDiv">
            <img className="im" src={famImage}></img>
          </div>
          <div className="divFlexColumn card1">
            <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}}>
              <CardContent>
                <Grid container spacing={1}>
            <div className="text font-extrabold text-5xl mx-auto marginSignin title">
              {" "}
              Create a new family{" "}
            </div>
          <div className="max-w-lg w-full mx-auto bg-white  borderSignup" >
          <form
            action=""
            className="space-y-12"
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
              <div>
              <Grid xs={12} item>
                  <TextField label="Family's Name" variant="outlined" fullWidth required onChange={(changeEvent) =>
                  setFamilyName(changeEvent.target.value)
                }
                value={familyName} className="input-box" inputProps={{style: {fontSize: 15}}} InputLabelProps={{style: {fontSize: 15}}}/>
              </Grid>
              </div>
              <div>
                <button className="w-full py-2 px-4 bg-[#22a7ff] hover:bg-[#FFB200] rounded-md text-white text-m padding  button1">
                  Create
                </button>
              </div>
            </form>
          </div>
          </Grid>
          </CardContent>
          </Card>
          </div>
          </div>
        </div>
    </>
  );
};

export default CreateHousehold;

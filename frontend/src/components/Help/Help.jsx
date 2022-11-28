import helpImg from "../../image/phone.gif";
import React, { useState } from 'react';
import {Typography, Card, CardContent,Grid, TextField} from '@material-ui/core';
import { shadows } from '@mui/system';
import emailjs from 'emailjs-com';
import contact from '../../image/contact-us.svg';
import './Help.css';

const Result = () => {
    return (
        <div className='mt-[200px] ml-[65px] animate-bounce get-back'>
            <h2 className='whitespace-nowrap text-3xl font-bold text-[#000] '>We will get back shortly</h2>
        </div>
    )
}

const Help = () => {
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_djqd892', 'template_sma0zmp', e.target, 'O4pgm2rqmFBX5nBpR').then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        )
        showResult(true);
    }

    setTimeout(() => {
        showResult(false);
    }, 5000);


    return (
        // <div className='w-full'>
        //     <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        //         <h2 className='py-2 text-7xl text-[#000] font-bold'>Contact Us</h2>
        //         <div className='flex w-full h-full rounded-xl p-4 bg-white'>
        //             <div className='w-full h-auto rounded-xl'>
        //                 <div className='grid grid-cols-2 gap-2'>
        //                     <div className='pr-10 mr-6  drop-shadow-lg'>
        //                         <img src={helpImg} className='im'></img>
        //                     </div>
        //                     <div className='p-2'>
        //                         {!result ? (
        //                             <form className='pl-6' onSubmit={sendEmail}>
        //                                 <h2 className='whitespace-nowrap text-5xl font-bold text-[#000] py-2 fillout'>Fill Out The Designated Fields</h2>
        //                                 <div className='grid gap-4 w-full py-4'>
        //                                     <div className='flex flex-col'>
        //                                         <label className='uppercase text-xl py-2'>Name</label>
        //                                         <input className='border-2  p-3 flex border-gray-300' type="text" name="fullName"></input>
        //                                     </div>
        //                                 </div>
        //                                 <div className='flex flex-col py-2'>
        //                                     <label className='uppercase text-xl py-2'>Email</label>
        //                                     <input className='border-2 p-3 flex border-gray-300' type="email" name="email"></input>
        //                                 </div>
        //                                 <div className='flex flex-col py-2'>
        //                                     <label className='uppercase text-xl py-2'>Message</label>
        //                                     <textarea className='border-2 p-3 border-gray-300' rows="5" name="message"></textarea>
        //                                 </div>
        //                                 <button className='w-full p-4 text-gray-100 mt-4 bg-[#22a7ff] rounded-lg sub' value="send">Submit</button>
        //                             </form>
        //                         ) : (
        //                             <Result />
        //                         )}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="bg-50 flex flex-col justify-center marginMain">
          <div className="divFlex">
          <div className="imDiv">
            <img className="im" src={contact}></img>
          </div>
          <div className="divFlexColumn card1 w-full flex">
            <Card elevation={2} style={{maxWidth:400, margin:"0 auto", padding:"15px 35px"}} sx={{boxShadow: 1}} className="card1">
              <CardContent>
                <Grid container spacing={1}>
            <div className="text font-extrabold text-5xl mx-auto marginSignin title ">
              {" "}
              Contact Us{" "}
            </div>
          <div className="max-w-lg w-full mx-auto bg-white  borderSignup" >
          {!result ? (
          <form onSubmit={sendEmail}>
              <div>
              <Grid justify="space-around" spacing={0} xs={12} container className="text-box">
                  <TextField label="Name" variant="outlined" fullWidth required name="fullName" className="padding" inputProps={{style: {fontSize: 15}}} InputLabelProps={{style: {fontSize: 15}}} />
              </Grid>
              <Grid xs={12} justify="space-around" spacing={0} container className="text-box">
                  <TextField type="email" label="Email" variant="outlined" fullWidth required name="email" inputProps={{style: {fontSize: 15}}} InputLabelProps={{style: {fontSize: 15}}} />
              </Grid>
              <Grid xs={12} justify="space-around" spacing={0} container className="text-box">
                  <TextField label="Message" variant="outlined" fullWidth required name="message" multiline rows={4} inputProps={{style: {fontSize: 15}}} InputLabelProps={{style: {fontSize: 15}}} />
              </Grid>
              </div>
              <div>
                <button className="w-full py-2 px-4 bg-[#22a7ff] hover:bg-[#FFB200] rounded-md text-white text-m padding button1" value="send">
                  Submit
                </button>
              </div>
            </form>
        ) : (
            <Result />
            )}
          </div>
          </Grid>
          </CardContent>
          </Card>
          </div>
          </div>
        </div>
    )
}

export default Help;
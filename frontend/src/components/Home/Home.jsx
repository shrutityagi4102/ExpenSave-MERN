import React from "react";
import {RemoveScroll} from 'react-remove-scroll';
import coindrop1 from '../../image/coindrop1.gif';
import './Home.css';

const Home = () => {
  const backgroundImageStyle = {
    backgroundSize: "cover",
  }

  return (
  <RemoveScroll>
    <div className="App">
      <div className="w-full h-[2000px] flex flex-col justify-between bg-slate-50" style={backgroundImageStyle}>
        <div>
          <div className="grid md:grid-cols-2 m-[250px]">
            <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 imagesidetext">
              <p className="text-4xl text-black">Worried about not saving enough?</p>
              <h1 className="py-3 text-7xl md:7xl font-bold text-black">
                Track Your Expenses With ExpenSave
              </h1>
              <p className="text-2xl text-black">A Collaborative Expense Tracking App </p>
              <a
                href="/signup"
                class="mt-6 relative inline-flex items-center px-20 py-5 overflow-hidden text-3xl font-medium text-[#000] border-2 border-[#47B5FF] rounded-full hover:text-white group hover:bg-gray-50"
              >
                <span class="absolute left-0 block w-full h-0 transition-all bg-[#47B5FF] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
                <span class="relative">Get Started</span>
              </a>
            </div>
            <div className="coin">
               <img src={coindrop1} alt="coindrop1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </RemoveScroll>
  );
};

export default Home;

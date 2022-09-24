import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Details from "../Pages/Details";
import Follwer from "../Pages/Followers/Follwer";
import Home from "../Pages/Home";
const Allrouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/detail" element={<Details/>} />
       <Route path="/follower" element={<Follwer/>} /> */}
      </Routes>
    </>
  );
};

export default Allrouter;

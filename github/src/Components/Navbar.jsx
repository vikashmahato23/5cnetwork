import React from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getData } from "../Redux/Repo/action";
import Loader from "./loader";
const Navbar = ({ onClick, back }) => {
  const disatch = useDispatch();
  const [text, setText] = useState();
  const followdata = useSelector((state) => state.Followers.data);
  const Repo = useSelector((state) => {
    return state.Repo.data;
  });
  return (
    <nav>
      <div>
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/GITHUB-512.png"
          alt="Github Logo Png, Transparent Png@kindpng.com"
        />
      </div>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />{" "}
        <button
          onClick={() => {
            onClick();
            disatch(getData(text));
          }}
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/awesome-lineca-collection/32/magnifying-glass-128.png"
            alt=""
          />
        </button>
        {back ? (
          <button
            onClick={() => {
              onClick();
            }}
          >
            <img
              src="https://img.icons8.com/ios/2x/circled-left-2.png"
              alt=""
            />
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import "./details.css";
import { getfollower } from "../Redux/Followers/action";
const Details = ({ data, onClick }) => {
  console.log(data, "datadetial");
  const dispatch = useDispatch();
  return (
    <div className="details">
      {data ? (
        <>
          <div>
            <img src={data[0].owner.avatar_url} alt="" />
            <p>{data[0].owner.login}</p>
            <button
              onClick={() => {
                onClick();
                dispatch(getfollower(data[0].owner.login));
              }}
            >
              See Followers
            </button>
          </div>
          <div>
            <p
              style={{
                color: "gray",
                fontSize: "15px",
              }}
            >
              {data[0].name}
            </p>
            <p>{data[0].full_name}</p>
            <p
              style={{
                color: "gray",
                fontSize: "15px",
                fontWeight: "400",
                color: "black",
                alignItems: "left",
                width: "500px",
                // border:"1px solid red",
                wordBreak: "break-all",
              }}
            >
              {data[0].description}
            </p>
            <p>{data[0].languages}</p>
            <div className="topics" style={{ display: "grid" }}>
              {data[0].topics?.length > 0
                ? data[0].topics?.map((e, i) => {
                    return <p key={i}>{e}</p>;
                  })
                : null}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Details;

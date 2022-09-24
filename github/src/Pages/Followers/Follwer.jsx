import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepo } from "../../Redux/frndRepo/action";
import "./followers.css";
const Follwer = ({ onClick }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.Followers.data;
  });

  console.log(data);
  return (
    <div className="followers">
      <div>
        {data
          ? data.map((e, i) => {
              return (
                <React.Fragment key={i}>
                  <div
                    className="imgname"
                    onClick={() => {
                      onClick();
                      dispatch(getRepo(e.login));
                    }}
                  >
                    <img src={e.avatar_url} alt="" />
                    <p>{e.login}</p>
                  </div>
                </React.Fragment>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Follwer;

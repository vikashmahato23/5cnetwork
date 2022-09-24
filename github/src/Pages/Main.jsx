import React, { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../Components/loader";
import Navbar from "../Components/Navbar";
import Details from "./Details";
import Follwer from "./Followers/Follwer";
import Home from "./Home";
const Main = () => {
  const [reposhow, setReopshow] = useState(false);
  const [detaildata, setDetaildata] = useState([]);
  const [flrShow, setflrShow] = useState(false);
  const [detailShow, setDetailShow] = useState(true);
  const [data, setdata] = useState([]);
  const [frndRepo, setFrndRepo] = useState(false);
  const [back, setBack] = useState(false);
  const srchdata = useSelector((state) => state.Data.data);

  const followdata = useSelector((state) => state.Followers.data);
  const Repo = useSelector((state) => {
    return state.Repo.data;
  });
  useEffect(() => {
    console.log(frndRepo, "hellow", Repo, followdata);
    if (Repo.length == 0) {
      setdata([...srchdata]);
    }
    if (Repo.length > 0 && followdata.length > 0 && frndRepo == false) {
      setdata([...srchdata]);
      setBack(false);
    } else if (Repo.length > 0 && frndRepo) {
      setdata([...Repo]);
      setBack(true);
    }
  }, [srchdata, Repo, frndRepo]);
  function handleFollower(recdata) {
    if (reposhow == false) {
      setReopshow(true);
    } else if (reposhow == true && recdata) {
      setReopshow(false);
    }
    if (flrShow) {
      setFrndRepo(true);
      setflrShow(false);
    }

    if (!detailShow) {
      setDetailShow(true);
    }
    if (frndRepo) {
      setFrndRepo(false);
    }
    if (recdata != undefined) {
      var arr = new Array(0);
      arr[0] = recdata;
      setDetaildata(arr);
    }
  }
  function followershow() {
    if (flrShow) {
      setflrShow(false);
    } else {
      setflrShow(true);
    }
    setDetailShow(false);
  }

  return (
    <div>
      <Navbar onClick={handleFollower} back={back} />

      {data && reposhow ? <h4>Repositories</h4> : null}
      {data && reposhow ? <Home data={data} onClick={handleFollower} /> : null}
      {detailShow && !reposhow && detaildata.length > 0 ? (
        <h4>Profile</h4>
      ) : null}
      {detailShow && !reposhow && detaildata.length > 0 ? (
        <Details data={detaildata} onClick={followershow} />
      ) : null}
      {flrShow ? <h4>Followers</h4> : null}
      {flrShow ? <Follwer onClick={handleFollower} /> : null}
    </div>
  );
};

export default Main;

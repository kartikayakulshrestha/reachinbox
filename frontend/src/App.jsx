import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../src/features/feature";
import { Route, useNavigate, Routes } from "react-router-dom";
import MainGround from "./components/MainGround";
import TopOnebox from "./components/TopOnebox";
import LeftBar from "./components/LeftBar";
import Center from "./components/Center";

function App() {
  const selectedurl = useSelector((state) => state.counter.url);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  // let to const token
  const token = queryParams.get("token");
  const localStorageToken = localStorage.getItem("token");
  //productionchange
  //token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoia2FydGlrYXlhLmt1bDA5MDhAZ21haWwuY29tIiwiaWQiOjUwNiwiZmlyc3ROYW1lIjoiS2FydGlrYXlhIiwibGFzdE5hbWUiOiJLdWxzaHJlc3RoYSJ9LCJpYXQiOjE3MjMyODU3ODMsImV4cCI6MTc1NDgyMTc4M30.o_BmQHlIKF0_74-IeR58AM4aPAxmLZBKRU7WVA7SnL0"
  console.log(selectedurl);
  useEffect(() => {
    if (!token && !localStorageToken) {
      Navigate("/login");
    } else {
      if (token) {
        localStorage.setItem("token", `Bearer ${token}`);
      }
    }
  }, [token, localStorageToken]);

  return (
    <div>
      <TopOnebox />
      <LeftBar />
      {selectedurl === "/inbox" ? <MainGround /> : <Center />}
    </div>
  );
}
export default App;

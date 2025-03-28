import React from "react";
import { Header } from "../components/Header";
import User from "../redux/user/User.jsx";
import { setUser } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [userName, setUserName] = React.useState("");
  return (
    <div className="content-center flex flex-col items-center w-full h-full ">
      <Header />
      <div className="bg-stone-200 p-4 rounded-md flex flex-col my-25 px-[7%]">
        <label className="">帳號</label>
        <input
          className="bg-white-200 "
          type="text"
          placeholder="xxx@"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <br />
        <label className="">密碼</label>
        <input
          className="bg-white-200 "
          type="password"
          placeholder="password"
        ></input>
        <br />
        <button
          className="flex-none"
          onClick={() => dispatch(setUser(userName))}
        >
          登入
        </button>
      </div>
      <User></User>
    </div>
  );
}

export default Login;

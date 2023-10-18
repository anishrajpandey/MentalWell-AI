import CreateForum from "../components/CreateForum";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import getUserData from "../utils/getUserData";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CheckAuthentication from "./../utils/checkAuthentication";
import checkAuthentication from "./../utils/checkAuthentication";
export default function Forum() {
  const [MyForums, setMyForums] = useState([]);
  const [OtherForums, setOtherForums] = useState([]);
  useEffect(() => {
    getForums();
  }, []);
  async function getForums() {
    try {
      let res = await axios.get("http://localhost:5000/api/forum/getForums");
      let AllForums = res.data.forums;
      console.log(
        AllForums.filter(({ userID }) => userID === getUserData()._id)
      );
      setMyForums(
        AllForums.filter(({ userID }) => userID === getUserData()._id)
      );
      setOtherForums(
        AllForums.filter(({ userID }) => userID !== getUserData()._id)
      );
      console.log(
        AllForums.filter(({ userID }) => userID !== getUserData()._id)
      );
    } catch (e) {
      console.log(e.message);
    }
  }
  const [ShowCreateForum, setShowCreateForum] = useState(false);
  return (
    <main
      style={{
        background:
          "linear-gradient(170deg, rgba(2,0,36,1) 0%, rgba(80,80,255,1) 0%, rgba(0,212,255,1) 100%)",
      }}
    >
      <button
        variant="contained"
        className="bg-primaryBlue w-16 h-16  grid items-center fixed bottom-6 text-4xl right-16 rounded-full hover:bg-secondaryBlue "
        onClick={() => {
          // console.log(checkAuthenticationzzz)
          checkAuthentication()
            ? setShowCreateForum(!ShowCreateForum)
            : (window.location.href = "/loginuser");
        }}
      >
        +
      </button>
      {ShowCreateForum && <CreateForum />}
      <div className="bg-blue-50 rounded-xl py-6 flex items-center flex-col max-w-screen mx-auto">
        <h1 className="text-4xl font-bold text-black m-4  w-full text-center">
          Your Forums
        </h1>
        <ol type="1 " className="w-screen">
          {MyForums.map(({ title, _id, fakeName }) => (
            <li className="h-20 w-fit mx-auto items-center border px-4 flex gap-12 justify-around">
              {" "}
              <Link
                to={`/forum/${_id}`}
                className="text-xl px-2 w-full inline- py-4 block border-red-400 text-black"
              >
                {title}
              </Link>
              <Stack direction="row" spacing={1}>
                <Chip label={fakeName} />
              </Stack>{" "}
            </li>
          ))}
          {MyForums.length === 0 && (
            <h1 className="text-4xl  text-red-400 m-4  w-full text-center">
              No forums created by you
            </h1>
          )}
        </ol>
      </div>
      <div>
        <h1 className="text-5xl font-bold text-white pt-10 m-4  w-full text-center">
          Other forums{" "}
        </h1>
        <ol type="1" className="flex flex-col justify-center">
          {OtherForums.map(({ title, fakeName, _id }) => (
            <li className="h-fit my-4 flex justify-between px-32 w-fit mx-auto border py-8 rounded-sm items-center  transition hover:bg-purple-700">
              {" "}
              <Stack direction="row" spacing={1}>
                <Chip label={fakeName} />
              </Stack>{" "}
              <Link
                to={`/forum/${_id}`}
                className="text-xl px-12 py-2 inline-block  text-white "
              >
                {title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}

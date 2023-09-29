import { Button } from "@mui/material";
import CreateForum from "../components/CreateForum";
import { useEffect, useState } from "react";
import axios from "axios";
import getUserData from "../utils/getUserData";

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
    <main>
      <button
        variant="contained"
        className="bg-primaryBlue w-16 h-16  grid items-center fixed bottom-6 text-4xl right-16 rounded-full hover:bg-secondaryBlue "
        onClick={() => {
          setShowCreateForum(!ShowCreateForum);
        }}
      >
        +
      </button>
      {ShowCreateForum && <CreateForum />}
      <div className="bg-blue-50 rounded-xl py-6 flex items-center flex-col w-fit max-w-screen mx-auto">
        <h1 className="text-4xl font-bold text-black m-4  w-full text-center">
          Your Forums
        </h1>
        <ol type="1">
          {MyForums.map(({ title }) => (
            <li className="h-20 flex items-center shadow-lg ">
              {" "}
              <a
                href="#"
                className="text-xl px-12 py-4 inline-block text-purple-600 "
              >
                {title}
              </a>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-black m-4  w-full text-center">
          Other forums{" "}
        </h1>
        <ol type="1" className="flex flex-col justify-center">
          {OtherForums.map(({ title, fakeName }) => (
            <li className="h-20 flex items-center shadow-lg">
              {" "}
              <a
                href="#"
                className="text-xl px-12 py-2 inline-block text-purple-600 "
              >
                {title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}

import React, { useEffect, useState } from "react";
import getUserData from "../utils/getUserData";

const CreateForum = () => {
  const [ForumData, setForumData] = useState({});
  useEffect(() => {
    setForumData((prev) => ({
      ...prev,
      userID: getUserData()._id,
    }));
  }, []);

  return (
    <main className="w-9/12 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-75 mx-auto rounded-lg bg-secondaryBlue min-h-fit -m-8 p-8 flex justify-center shadow-2xl">
      <form action="#" className="flex w-11/12 flex-col ">
        <h1 className="text-5xl font-bold text-white underline w-full text-center">
          Start a forum !
        </h1>
        <div>
          <h2 className="text-lg font-semibold m-2 ">Title</h2>
          <input
            type="text"
            name=""
            id=""
            className="w-full ml-auto p-4 inline-block text-md rounded-2xl h-14"
            onChange={(e) => {
              setForumData((prev) => ({
                ...prev,
                title: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold m-2 ">Description</h2>
          <textarea
            type="text"
            name=""
            rows={10}
            id=""
            className="w-full ml-auto p-4 inline-block text-md rounded-2xl min-h-fit"
            onChange={(e) => {
              setForumData((prev) => ({
                ...prev,
                content: e.target.value,
              }));
            }}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-tertiary text-center font-bold h-12 rounded-lg hover:bg-transparent hover:outline my-4"
        >
          Add a forum{" "}
        </button>
      </form>
      <button
        onClick={() => {
          console.log(ForumData);
        }}
      >
        test
      </button>
    </main>
  );
};

export default CreateForum;

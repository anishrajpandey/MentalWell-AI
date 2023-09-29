import React from "react";

const CreateForum = () => {
  return (
    <main className="w-9/12 mx-auto rounded-lg bg-secondaryBlue min-h-fit p-8 flex justify-center shadow-2xl">
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
          />
        </div>
        <button
          type="submit"
          className="w-full bg-tertiary text-center font-bold h-12 rounded-lg hover:bg-transparent hover:outline my-4"
        >
          Add a forum{" "}
        </button>
      </form>
    </main>
  );
};

export default CreateForum;

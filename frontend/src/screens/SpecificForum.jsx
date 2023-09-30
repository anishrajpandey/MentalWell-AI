import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const SpecificForum = () => {
  const [Forum, setForum] = useState({});
  const [UpdatedForum, setUpdatedForum] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  async function handleUpdate() {
    let res = await axios.put(
      `http://localhost:5000/api/forum/updateForum/${
        window.location.pathname.split("/")[2]
      }`,
      UpdatedForum
    );
    console.log(res.data);
  }

  async function getForum() {
    let forumID = window.location.pathname.split("/")[2];
    let res = await axios.get(
      `http://localhost:5000/api/forum/getForum/${forumID}`
    );
    setForum((prev) => ({ ...prev, ...res.data }));
  }
  useEffect(() => {
    getForum();
  }, []);
  return (
    <article>
      {
        <main className="grid">
          <hr className="bg-tertiary text-tertiary " />
          <h2 className="px-4 text-md text-left font-semibold text-tertiary flex justify-between">
            <span>Forum opened by {Forum.forum?.fakeName}</span>
            <span>{Forum.forum?.created_at.split("T")[0]}</span>
          </h2>
          <h2 className="px-4 text-2xl text-left flex justify-between font-bold">
            {Forum?.forum?.title}{" "}
            <button className="text-xl" onClick={handleOpen}>
              ✏️{" "}
            </button>
          </h2>
          <h2 className="px-4 text-xl text-left font-medium">
            {Forum?.forum?.content}
          </h2>
        </main>
      }
      <Modal
        open={open}
        onClose={handleClose}
        className="rounded-md"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            className="text-bold"
            variant="h6"
            component="h2"
          >
            Edit Forum
          </Typography>
          <div className="w-full flex flex-col">
            <h1 className="text-lg font-semibold text-black">TItle</h1>
            <input
              onChange={(e) => {
                setUpdatedForum((prev) => ({
                  ...prev,
                  title: e.target.value,
                }));
              }}
              type="text"
              placeholder={Forum?.forum?.title}
              className="border-2 h-12 px-4 "
            />
            <h1 className="text-lg font-semibold text-black mt-8">
              Description
            </h1>
            <textarea
              onChange={(e) => {
                setUpdatedForum((prev) => ({
                  ...prev,
                  content: e.target.value,
                }));
              }}
              type="text"
              placeholder={Forum?.forum?.content}
              rows={8}
              className="w-full border-2 "
            />
          </div>
          <button
            onClick={handleUpdate}
            className="w-full bg-green-500 text-center p-2 font-bold my-2 rounded-md text-xl"
          >
            Update
          </button>
        </Box>
      </Modal>
    </article>
  );
};

export default SpecificForum;

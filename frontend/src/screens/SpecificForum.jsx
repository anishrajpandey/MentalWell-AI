import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import getUserData from "../utils/getUserData";
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
  async function handleDelete() {
    let response = window.confirm("Sure to delete??");
    console.log(response);
    if (response) {
      let res = await axios.delete(
        `http://localhost:5000/api/forum/deleteForum/${
          window.location.pathname.split("/")[2]
        }`
      );
      window.location.reload();
    }
  }
  async function handleUpdate() {
    setOpen(true);
    let res = await axios.put(
      `http://localhost:5000/api/forum/updateForum/${
        window.location.pathname.split("/")[2]
      }`,
      UpdatedForum
    );
    setOpen(false);
  }

  async function getForum() {
    let forumID = window.location.pathname.split("/")[2];
    let res = await axios.get(
      `http://localhost:5000/api/forum/getForum/${forumID}`
    );
    setForum((prev) => ({ ...prev, ...res.data }));
    console.log(res.data);
  }
  useEffect(() => {
    getForum();
  }, []);
  return (
    <article>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={false}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {
        <main className="grid">
          <hr className="bg-tertiary text-tertiary " />
          <h2 className="px-4 text-md text-left font-semibold text-tertiary flex justify-between">
            <span>Forum opened by {Forum.forum?.fakeName}</span>
            <span>{Forum.forum?.created_at.split("T")[0]}</span>
          </h2>
          <h2 className="px-4 text-4xl text-center flex justify-between font-bold">
            {Forum?.forum?.title}{" "}
            {Forum.forum?.userID === getUserData()._id && (
              <div className="flex gap-2 items-center">
                <button className="text-xl" onClick={handleOpen}>
                  ✏️{" "}
                </button>
                <DeleteIcon
                  onClick={handleDelete}
                  className="text-red-600 cursor-pointer"
                />
              </div>
            )}
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
      <hr className="mt-12" />
      <hr />
      <hr />
      <hr />
      <h2 className="flex justify-center text-5xl font-extrabold underline pt-4 text-red-800">
        Comments
      </h2>
      <p className="text-md uppercase text-center p-3 font-semibold">
        leave a comment!!
      </p>
      <div className="w-full flex justify-center">
        <textarea
          name="comment"
          id="comment"
          cols={"90"}
          rows={"10"}
          className="border mx-auto font-medium text-lg p-4"
        />
      </div>

      <article></article>
    </article>
  );
};

export default SpecificForum;

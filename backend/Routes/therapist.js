const express = require("express");
const Router = express.Router();
const { registerTherapist, loginTherapist,getTherapist } = require("../controllers/TherapistController");
const { registerTherapistMiddleware, loginTherapistMiddleware } = require("../Middleware/therapist");


Router.post("/registerTherapist", registerTherapistMiddleware, registerTherapist);
Router.post("/loginTherapist", loginTherapistMiddleware, loginTherapist);
Router.get("/therapists",getTherapist);

module.exports = Router;
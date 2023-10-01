import React, { useEffect, useState } from "react"; // You can directly import React without braces
import axios from "axios";

export default function FindTherapist() {
  const [therapists, setTherapists] = useState([]);
  const getTherapist = async () => {
    try {
      let response = await axios.get(
        "http://localhost:5000/api/therapist/therapists"
      );

      const therapist = response.data.therapist;
      console.log(therapist);
      setTherapists(therapist);
    } catch (error) {
      console.error("Error fetching therapists:", error.message);
    }
  };

  useEffect(() => {
    getTherapist();
  }, []);

  return (
    <div>
      <div
        className="p-2 font-extrabold rounded-md"
        style={{
          width: "500px",
          backgroundColor: "skyblue",
          margin: "auto",
          fontSize: "20px",
        }}
      >
        {" "}
        <h1 className="mt-4 text-center">All Therapist</h1>
      </div>
      {therapists.map((therapist, index) => (
        <div
          key={index}
          className="flex flex-wrap bg-red-200 w-[500px]  mx-auto  hover:bg-red-300 transition
         my-8 flex-col p-4 justify-center border-lg items-center m-16 rounded-md  "
        >
          <p>
            {" "}
            <b>Name:</b> {therapist.name}
          </p>
          <p>
            {" "}
            <b>Email:</b> {therapist.email}
          </p>
          <p>
            {" "}
            <b>Expertise:</b> {therapist.expertise}
          </p>
        </div>
      ))}
    </div>
  );
}

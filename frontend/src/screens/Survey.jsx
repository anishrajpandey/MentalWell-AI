import React, { useState } from "react";
import axios from "axios";
import getUserData from "../utils/getUserData";
const questions = [
  "How often do you feel overwhelmed?",
  "How frequently do you experience mood swings?",
  "Do you often find it hard to concentrate?",
  "How often do you feel disconnected from others?",
  "Do you frequently experience feelings of sadness or hopelessness?",
];

const SurveyForm = () => {
 
  const initialResponses = questions.reduce((acc, _, index) => {
    acc[`q${index + 1}`] = 0;
    return acc;
  }, {});

  const [responses, setResponses] = useState(initialResponses);
//   const setEmotionState = async () => {
//     const state = 10 - average * 5;
//     console.log(state);
//     const res = await axios.post(
//       "http://localhost:5000/api/user/setEmotionState",
//       {
//         _id: getUserData()._id,
//         emotionState: state,
//       }
//     );

//     window.location.href = "/";
//     console.log(res.data);
//   };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResponses((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const total = Object.values(responses).reduce(
      (acc, value) => acc + value,
      0
    );
  
    const state = 10 - (total / questions.length) * 5;
    console.log(state);
    const res = await axios.post(
      "http://localhost:5000/api/user/setEmotionState",
      {
        _id: getUserData()._id,
        emotionState: state,
      }
    );

    window.location.href = "/";
    console.log(res.data);
  };

  return (
    <div className="min-h-screen flex  flex-col items-center justify-center bg-gray-100">
      <p className="text-5xl text-center font-bold">Take a Quick Survey</p>
      <div className="container mx-auto bg-white rounded-lg shadow-md p-6 md:p-8 my-5">
        <form onSubmit={handleSubmit} className="space-y-6">
          {questions.map((question, index) => (
            <div key={`q${index + 1}`} className="space-y-3">
              <label className="block text-lg mb-2">{question}</label>
              <div className="flex space-x-4">
                {["Never", "Sometimes ", "Often"].map((label, value) => (
                  <div key={value} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id={`q${index + 1}-option${value}`}
                      name={`q${index + 1}`}
                      value={value}
                      checked={responses[`q${index + 1}`] === value}
                      onChange={handleInputChange}
                      className="form-radio text-blue-500"
                    />
                    <label
                      htmlFor={`q${index + 1}-option${value}`}
                      className="text-gray-600"
                    >
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
          
            type="submit"
            className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none"
          >
            Submit
          </button>
        </form>
        {/* {average !== null && (
          <div className="mt-4 text-xl">
            Average Score: <strong>{10 - average * 5}</strong>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default SurveyForm;

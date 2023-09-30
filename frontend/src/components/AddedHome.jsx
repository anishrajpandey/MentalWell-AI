import React from "react";

const AddedHome = () => {
  return (
    <section className="flex flex-col my-16">
      <div className=" my-8 item flex flex-col md:flex-row">
        <div className="leftSide flex-1 pl-2 md:pl-20 flex flex-col justify-center">
          <h2 className="title p-4 font-semibold flex gap-2 items-center">
            <span className="text-xl md:text-3xl">
              WE SUPPORT YOUR JOURNEY TO A&nbsp;
              <span className="font-bold text-orange-700">HEALTHIER MIND</span>
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <p
              className="text-black w-full text-base md:text-lg ml-4 md:ml-8"
              style={{ textAlign: "justify" }}
            >
              Are you looking to enhance your mental well-being? If so, you've
              come to the right place. We are a team of dedicated professionals
              who are committed to helping you achieve better mental health. Our
              expertise lies in providing the support and tools you need to
              navigate your mental health journey successfully. We have a proven
              track record of making a positive impact, and we are passionate
              about improving lives through mental well-being.
            </p>
          </div>
        </div>
        <div className="rightSide flex-1 md:pl-16 flex justify-start w-full md:w-64 h-56">
          <img
            className="w-full h-full object-containr"
            src="/assets/1.svg"
            alt="dfdsfddsfds"
          />
        </div>
      </div>

      <div className="my-8 w-full mt-12 flex flex-col md:flex-row-reverse">
        <div className="leftSide flex-1 pl-2 md:pl-20 flex flex-col justify-center">
          <h2 className="title p-4 font-semibold flex gap-2 items-center">
            <span className="text-xl md:text-3xl">
              WE HELP YOU FIND&nbsp;
              <span className="font-bold text-orange-700">MENTAL WELLNESS</span>
            </span>
          </h2>
          <div className="px-5 mt-8 md:mt-1 md:px-12">
            <p
              className="text-black text-base md:text-lg"
              style={{ textAlign: "justify" }}
            >
              Our advanced AI technology is designed to guide you towards mental
              wellness. We understand the challenges individuals face in
              maintaining mental health, and we are dedicated to providing you
              with the tools and support you need to achieve it. If you're ready
              to embark on a journey towards better mental well-being, get in
              touch with us today to learn more.
            </p>
          </div>
        </div>
        <div className="rightSide flex-1 md:pl-16 flex justify-center w-full md:w-64 h-56">
          <img
            className="w-full h-full object-contain"
            src="/assets/2.svg"
            alt="Illustration of Mental Wellness"
          />
        </div>
      </div>

      <div className="my-8 item w-full flex flex-col md:flex-row">
        <div className="leftSide flex-1 pl-2 md:pl-20 flex flex-col justify-center">
          <h2 className="title p-4 font-semibold flex gap-2 items-center">
            <span className="text-xl md:text-3xl">
              WE PROVIDE YOU WITH&nbsp;
              <span className="font-bold text-orange-700">
                PERSONALIZED SOLUTIONS
              </span>
            </span>
          </h2>
          <div className="px-5 mt-8 md:mt-1 md:px-12">
            <p
              className="text-black text-base md:text-lg"
              style={{ textAlign: "justify" }}
            >
              Your mental health journey is unique, and our AI technology
              understands that. We offer personalized solutions that cater to
              your specific needs, ensuring you receive the support you deserve.
              If you're seeking a customized approach to mental wellness, reach
              out to us today to discover how we can assist you on your journey.
            </p>
          </div>
        </div>
        <div className="rightSide flex-1 md:pl-16 flex justify-center">
          <img
            className="w-full h-full object-conain"
            src="/assets/3.svg"
            alt="Illustration of Personalized Solutions"
          />
        </div>
      </div>
    </section>
  );
};

export default AddedHome;

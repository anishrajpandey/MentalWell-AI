import React from "react";

const AddedHome = () => {
  return (
    <section className={` flex flex-col w-72  `}>
      <>
        <div className="item  flex flex-col md:flex-row">
          <div className="leftSide flex-1 pl-2 md:pl-20 flex flex-col justify-center ">
            <h2 className="title p-4 font-semibold flex gap-2 items-center ">
              <img
                className="inline-block"
                width="500"
                height="500"
                src="./assets/firstH.jpg"
                alt="star-half-empty"
              />
              <span className=" text-xl md:text-3xl ">
                {" "}
                WE HELP YOU BUILD A&nbsp;
                <span className="font-bold text-orange-700">
                  TECHNICAL ECOSYSTEM
                </span>
              </span>
            </h2>
            <div className=" px-5 mt-22 md:mt-1 md:px-12">
              <p className="text-black text-base md:text-lg  ">
                Do you want to build a successful technology business? If so,
                you need to build a strong technical ecosystem around your
                company.We are a team of experienced ecosystem builders who can
                help you build a successful technical ecosystem for your
                business. We have a proven track record of success, and we are
                passionate about helping businesses grow and succeed.
              </p>
            </div>
          </div>
          <div className="rightSide flex-1 md:pl-16 flex justify-start w-64 h-56">
            <img
              width={400}
              height={500}
              src={"/assets/1.svg"}
              alt="dfdsfddsfds"
              className="w-64 h-64"
            />
          </div>
        </div>
      </>

      <div className="w-full mt-12  flex flex-col md:flex-row-reverse">
        <div className="leftSide flex-1 pl-2 md:pl-20 flex flex-col justify-center ">
          <h2 className="title p-4 font-semibold flex gap-2 items-center ">
            <img
              className="inline-block"
              width="40"
              height="40"
              src="/assets/starIcon.png"
              alt="star-half-empty"
            />{" "}
            <span className=" text-xl md:text-3xl ">
              {" "}
              WE MAKE YOUR BUSINESS
              <span className="font-bold text-orange-700">
                &nbsp;STAND OUT{" "}
              </span>
            </span>
          </h2>
          <div className=" px-5 mt-22 md:mt-1 md:px-12">
            <p className="text-black text-base md:text-lg  ">
              By working with us, you can be sure that your business will stand
              out from the competition and achieve its full potential. We
              understand the challenges that businesses face, and we are
              committed to providing you with the solutions you need to succeed.
              If you are ready to take your business to the next level, contact
              us today to learn more about it.
            </p>
          </div>
        </div>
        <div className="rightSide flex-1 md:pl-16 flex justify-center ">
          //todo{" "}
        </div>
      </div>

      {/* itm 3 */}

      <div className="item w-full  flex flex-col md:flex-row">
        <div className="leftSide flex-1 pl-2 md:pl-20 flex flex-col justify-center ">
          <h2 className="title p-4 font-semibold flex gap-2 items-center ">
            <img
              className="inline-block"
              width="40"
              height="40"
              src={"/assets/starIcon.png"}
              alt="star-half-empty"
              placeholder="blur"
              blurDataURL={"/assets/starIcon.png"}
            />
            <span className=" text-xl md:text-3xl ">
              {" "}
              <span className=" text-xl md:text-3xl ">
                {" "}
                WE OFFER YOU THE&nbsp;
                <span className="font-bold text-orange-700">FREEDOM </span>
                &nbsp;OF FULL
                <span className="font-bold text-orange-700">
                  &nbsp;CUSTOMIZATION
                </span>
              </span>
            </span>
          </h2>
          <div className=" px-5 mt-22 md:mt-1 md:px-12">
            <p className="text-black text-base md:text-lg  ">
              If you are looking for a way to stand out from the competition,
              then custom made software is the answer. Contact us today to learn
              more about how we can help you create custom made software that
              will give you a competitive advantage.
            </p>
          </div>
        </div>
        <div className="rightSide flex-1 md:pl-16 flex justify-center mt-4 ">
          //todod
        </div>
      </div>
    </section>
  );
};

export default AddedHome;

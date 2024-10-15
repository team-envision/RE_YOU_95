import React from "react";

const AboutUs = () => {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-black p-4">
      <div className="flex flex-col lg:flex-row items-center justify-center text-white w-full">
        <div className="relative w-full lg:w-[576px] h-[321px] lg:h-[371px] mb-6 lg:mb-0 lg:mr-20">
          <div className="absolute inset-0 w-full h-full z-10">
            <img
              src="aboutus.png"
              className="w-full h-full object-contain"
              alt="Main"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-[576px] lg:h-[533px] text-center lg:text-left px-4 lg:px-0">
          <h1 className="text-[#ED8325] text-[32px] lg:text-[48px] font-bold">
            About The Reunion
          </h1>
          <p className="text-[18px] lg:text-[23px] mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center mt-10 w-full max-w-7xl space-y-6 md:space-y-0 mb-10">
        <div className="flex flex-col w-full md:w-[250px] text-center md:text-left">
          <h2 className="text-[20px] text-[#ED8325] md:text-[25px] font-bold">
            WHERE
          </h2>
          <p className="text-[16px] text-white md:text-[20px] mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="flex flex-col w-full md:w-[250px] text-center md:text-left">
          <h2 className="text-[20px] text-[#ED8325] md:text-[25px] font-bold">
            WHEN
          </h2>
          <p className="text-[16px] text-white md:text-[20px] mt-2">
            Friday to Sunday
          </p>
          <p className="text-[16px] text-white md:text-[20px]">
            Aug 30 - Sep 01, 2024
          </p>
        </div>

        <div className="flex justify-center md:justify-start">
          <button className="rounded-full text-white bg-transparent border-[#ED8325] border-[1px] px-6 md:px-14 py-2 md:py-2 text-[18px] md:text-[20px] font-bold">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

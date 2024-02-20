import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className="h-screen w-2/3 bg-gray-100">
        <div className="flex justify-between items-center w-full bg-white h-[52px]">
          <div className="ml-4 flex gap-2">
            <Image
              src="/assets/logo.svg"
              alt=""
              width={30}
              height={30}
              className="rounded-full"
            />
            <div>
              <p className="text-md">Test User</p>
              <p className="text-sm text-gray-500">TestUseremail.com</p>
            </div>
          </div>
          <button className="mr-2 border text-sm border-[#6656FF] py-2 px-4 rounded-3xl hover:bg-[#6656FF] hover:text-white">
            Invite Friends
          </button>
        </div>
        <p className="text-4xl ml-4 my-2 font-semibold text-gray-500">
          Examples
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center border rounded-xl bg-white shadow-md pb-0 overflow-hidden"
            >
              <div className="bg-gray-100 w-full max-h-[65%] flex justify-center rounded-t-xl">
                <Image
                  src="https://history-computer.com/wp-content/uploads/2023/01/shutterstock_2093652733-scaled.jpg"
                  alt="Image Description"
                  width={120}
                  height={120}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="w-full p-2">
                <h3 className="text-md font-bold text-gray-800">Post 1</h3>
                <div className="w-full">
                  <p className="text-sm mt-1 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci, facilis.
                  </p>
                </div>
                <div className="flex justify-between w-full gap-2">
                  <p className="text-sm mt-1 text-gray-500 justify-end">
                    15th feb
                  </p>
                  <p className="text-sm mt-1 text-gray-500 justify-end">
                    Gaurav
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;

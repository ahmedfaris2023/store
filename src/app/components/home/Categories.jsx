import React from "react";
import { BsPhone } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";

const Categories = () => {
  const catefories = [
    { id: 1, title: "Phones", image: <BsPhone /> },
    { id: 2, title: "Computers", image: <HiOutlineComputerDesktop /> },
    { id: 3, title: "SmartWatch", image: <BsSmartwatch /> },
    { id: 4, title: "Camera", image: <CiCamera /> },
    { id: 5, title: "HeadPhones", image: <CiHeadphones /> },
    { id: 6, title: "Gaming", image: <LuGamepad /> },
  ];
  return (
    <section className="w-full h-[1200px] pt-10  pl-[10%] pr-[8%]">
      <div className=" border-t border-gray-300 "></div>
      <section>
        <div className="flex items-center pt-16 ">
          <div className="bg-red-600 w-5 h-8"></div>
          <div className="p-2 font-bold text-red-600"> Categories</div>
        </div>
        <div className="font-bold text-4xl pt-3">Browse By Category</div>
      </section>
      <section className="flex justify-around  pt-10 items-center">
        {catefories.map((item) => (
          <div className="group border w-[170px] h-[140px] flex flex-col items-center justify-center hover:bg-red-500 ease-in duration-300 ">
            <div className="text-3xl  group-hover:text-white">{item.image}</div>
            <div className="text-black group-hover:text-white">
              {item.title}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Categories;

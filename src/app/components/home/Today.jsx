"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { MdStar } from "react-icons/md";

const Card = ({ title, image }) => {
  return (
    <section>
      <div className="mt-9 relative">
        <Image src={image} width={270} height={270} alt="image" />
      </div>
      <div className="bg-red-500 w-14 h-8 rounded absolute top-12 left-2  flex items-center justify-center">
        <div className="text-white  text-sm  ">-40%</div>
      </div>
      <div className="bg-white rounded-full absolute top-12 left-[60%] w-6 h-6 flex items-center justify-center">
        <IoIosHeartEmpty className=" text-black " />
      </div>
      <div className="bg-white rounded-full absolute top-[33%] left-[60%] w-6 h-6 flex items-center justify-center">
        <IoEyeOutline className=" text-black " />
      </div>
      <div className="font-bold">HAVIT HV-G92 Gamepad</div>
      <div className="flex">
        <div className="text-red-500">$120</div>
        <div className="line-through text-gray-400 pl-2">$160</div>
      </div>
      <div className="flex text-yellow-500">
        {Array.from({ length: 5 }, (_, i) => (
          <MdStar key={i} />
        ))}
      </div>
    </section>
  );
};

const Today = () => {
  const cards = [
    { title: "Card 1", image: "/image.png" },
    { title: "Card 2", image: "/image.png" },
    { title: "Card 3", image: "/image.png" },
    { title: "Card 3", image: "/image.png" },
    { title: "Card 3", image: "/image.png" },
    { title: "Card 3", image: "/image.png" },
    // Add more cards as needed
  ];
  return (
    <section className="ml-[12%] mt-[9%]">
      <section>
        <div className="flex items-center ">
          <div className="bg-red-600 w-5 h-8"></div>
          <div className="p-2 font-bold text-red-600"> Today's</div>
        </div>
        <div className="flex pt-5 items-center ">
          <div className="font-bold text-4xl pt-3">Flash Sales</div>
          <div className="pl-16 flex flex-col ">
            <span className="text-1xl font-bold">Days</span>
            <div className="text-4xl font-bold">03</div>
          </div>
          <div className="pl-5 text-5xl text-red-500">:</div>
          <div className="pl-6 flex flex-col ">
            <span className="text-1xl font-bold">Hours</span>
            <div className="text-4xl font-bold">03</div>
          </div>
          <div className="pl-5 text-5xl text-red-500">:</div>
          <div className="pl-6 flex flex-col ">
            <span className="text-1xl font-bold">Minutes</span>
            <div className="text-4xl font-bold">03</div>
          </div>
          <div className="pl-5 text-5xl text-red-500">:</div>
          <div className="pl-6 flex flex-col ">
            <span className="text-1xl font-bold">Seconds</span>
            <div className="text-4xl font-bold">03</div>
          </div>
        </div>
      </section>
      <section>
        <Swiper
          spaceBetween={20}
          slidesPerView={4} // Number of visible cards
          pagination={{ clickable: true }} // Add pagination dots
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <Card title={card.title} image={card.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className=" flex items-center justify-center pt-8 ">
        <button className="bg-red-500 text-white pl-6 pr-6 py-4 rounded">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default Today;

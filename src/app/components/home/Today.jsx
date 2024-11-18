"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Card = ({ title, image }) => {
  return (
    <section>
      <div className="bg-slate-300 w-[270px] h-[270px] mt-9"></div>
      <div></div>
    </section>
  );
};

const Today = () => {
  const cards = [
    { title: "Card 1", image: "./image.png" },
    { title: "Card 2", image: "./image.png" },
    { title: "Card 3", image: "./image.png" },
    { title: "Card 3", image: "./image.png" },
    { title: "Card 3", image: "./image.png" },
    { title: "Card 3", image: "./image.png" },
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
      <section className="h-[400px]">
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
    </section>
  );
};

export default Today;

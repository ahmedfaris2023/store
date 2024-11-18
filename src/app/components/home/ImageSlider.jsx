"use client";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import Image from "next/image";

const ImageSlider = () => {
  return (
    <div className="relative">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="h-96 w-full rounded-lg"
      >
        <SwiperSlide className="">
          <Image src="/image.png" alt="Slide Image" width={892} height={344} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/image.png" alt="Slide Image" width={892} height={344} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/image.png" alt="Slide Image" width={892} height={344} />
        </SwiperSlide>
      </Swiper>

      {/* Custom CSS for pagination */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 10px !important; /* Position near the bottom */
          text-align: center;
          width: 100%;
        }
        .swiper-pagination-bullet {
          background: #0070f3; /* Blue color for bullets */
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #ff3d00; /* Highlight active bullet in orange */
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;

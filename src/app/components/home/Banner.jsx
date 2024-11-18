import React from "react";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import ImageSlider from "./ImageSlider";

const Banner = () => {
  const menuItems = [
    {
      title: "Woman’s Fashion",
      subItems: [
        { title: "Banned Users", href: "/banned-users" },
        { title: "Calendar", href: "/calendar" },
      ],
    },
    {
      title: "Men’s Fashion",
      subItems: [
        { title: "Banned Users", href: "/banned-users" },
        { title: "Calendar", href: "/calendar" },
      ],
    },
    { title: "Electronics", href: "/invoices" },
    { title: "Home & Lifestyle", href: "/invoices" },
    { title: "Medicine", href: "/invoices" },
    { title: "Sports & Outdoor", href: "/invoices" },
    { title: "Baby’s & Toys", href: "/invoices" },
    { title: "Groceries & Pets", href: "/invoices" },
    { title: "Health & Beauty", href: "/invoices" },
  ];

  return (
    <div className="flex ml-[10%] ">
      <div className="flex  flex-col justify-around border-e bg-white w-[15%] h-[10%]">
        <div className="px-4 py-6 ">
          <ul className="mt-6 space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.subItems ? (
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                      <span className="text-sm font-medium">{item.title}</span>
                      <MdArrowForwardIos />
                    </summary>

                    <ul className="mt-2 space-y-1 px-4">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 ml-40 w-[900px] ">
        <ImageSlider />
      </div>
    </div>
  );
};

export default Banner;

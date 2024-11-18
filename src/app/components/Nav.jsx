"use client";
import Link from "next/link";
import { useState, React, useRef } from "react";
import { SlArrowDown } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("العربية");
  const inputRef = useRef(null);
  const handleIconClick = () => {
    inputRef.current.focus();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsOpen(false); // إغلاق القائمة بعد التغيير
  };
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Sign Up", href: "/signup" },
  ];
  return (
    <div className="">
      <div className="flex bg-black justify-evenly ">
        <div className="text-white  py-5 ">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="text-white py-5 mx-7 font-bold underline underline-offset-4">
            ShopNow
          </span>
        </div>

        <div style={{ position: "relative", display: "inline-block" }}>
          <button
            onClick={toggleMenu}
            style={{ padding: "10px", cursor: "pointer", color: "white" }}
          >
            <div className="flex pt-2 ">
              {language}
              <div className="flex items-center pl-3">
                <SlArrowDown className="items-center " />
              </div>
            </div>
          </button>
          {isOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "black",
                border: "1px solid #ccc",
                borderRadius: "5px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                zIndex: 1,
              }}
            >
              <button
                onClick={() => changeLanguage("العربية")}
                style={{
                  padding: "10px",
                  display: "block",
                  width: "100%",
                  color: "white",
                }}
              >
                العربية
              </button>
              <button
                onClick={() => changeLanguage("English")}
                style={{
                  padding: "10px",
                  display: "block",
                  width: "100%",
                  color: "white",
                }}
              >
                English
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-around   p-10 items-center border">
        <div className="font-bold text-3xl ">Exclusive</div>
        <ul className="flex space-x-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-around items-center mr-15">
          <form>
            <div className="flex w-full p-2 ps-4 text-sm text-gray-900 border  rounded-lg bg-gray-50 ">
              <input
                ref={inputRef}
                className="  "
                type="search"
                id="default-search"
                placeholder="What are you looking for?"
                required
              />
              <IoSearchOutline className="w-5 h-5" onClick={handleIconClick} />
            </div>
          </form>
          <div className="flex justify-between p-1 w-36">
            <IoHeartOutline className="w-6 h-6  " />
            <RiShoppingCart2Line className="w-6 h-6" />
            <IoPersonOutline className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

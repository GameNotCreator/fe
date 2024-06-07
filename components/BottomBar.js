import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";

const BottomBar = () => {
  return (
    <nav className="fixed bottom-5 left-0 right-5 left-5 bg-black p-3 flex justify-around rounded-full shadow-lg z-50 ">
      <Link href="/home">
        <div className="flex items-center text-[15px] p-3 bg-white rounded-full cursor-pointer">
          <FaHome className="mr-2" /> Home
        </div>
      </Link>
      <Link href="/reservation">
        <div className="flex items-center text-[15px] p-3 text-white cursor-pointer">
          <MdEventNote className="mr-2" /> Reservation
        </div>
      </Link>
    </nav>
  );
};

export default BottomBar;

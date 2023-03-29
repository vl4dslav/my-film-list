import React from "react";
import MenuItem from "./MenuItem";
import { DarkMode } from "./DarkMode";
import { AiOutlineHome } from "react-icons/ai";
import { BsInfoSquare } from "react-icons/bs";

export default function Header() {
  return (
    <div className="flex bg-slate-400 justify-evenly items-center h-12">
      <div className="flex justify-around w-60">
        <MenuItem title="home" address="/" Icon={AiOutlineHome} />
        <MenuItem title="about" address="/about" Icon={BsInfoSquare} />
      </div>
      <div className="flex items-center justify-evenly w-60">
        <DarkMode />
        <h2 className="bg-cyan-700 px-2 py-1 rounded-md">MyFilmList</h2>
      </div>
    </div>
  );
}

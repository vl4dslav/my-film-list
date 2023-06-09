"use client";
import React from "react";
import NavbarItem, { NavbarItemParam } from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-8 mt-4">
      <NavbarItem title="Latest" param={NavbarItemParam.latest} />
      <NavbarItem title="Ranked" param={NavbarItemParam.ranked} />
    </div>
  );
};

export default Navbar;

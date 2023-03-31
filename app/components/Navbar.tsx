"use client";
import React from "react";
import NavbarItem, { NavbarItemParam } from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-8 mt-2">
      <NavbarItem title="Latest" param={NavbarItemParam.latest} />
      <NavbarItem title="Popular" param={NavbarItemParam.popular} />
    </div>
  );
};

export default Navbar;

"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export enum NavbarItemParam {
  latest = "latest",
  ranked = "ranked",
}

interface NavbarItemProps {
  title: string;
  param: NavbarItemParam;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title, param }) => {
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const currentOrder = searchParams.get("order");
  return (
    <div
      className={
        (currentOrder === param ? "font-black " : "") +
        `bg-blue-200 dark:bg-blue-900 rounded-full w-20 
        text-center shadow-md  hover:shadow-lg dark:hover:text-white`
      }
    >
      <Link href={`${currentPath}/?order=${param}`}>{title}</Link>
    </div>
  );
};

export default NavbarItem;

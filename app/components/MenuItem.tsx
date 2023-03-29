import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  address: string;
  Icon: IconType;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address}>
        <Icon className="text-2xl sm:hidden" />
        <p className="hidden sm:inline">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;

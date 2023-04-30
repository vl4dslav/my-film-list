import Navbar from "@/app/components/Navbar";
import React from "react";

const searchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default searchLayout;

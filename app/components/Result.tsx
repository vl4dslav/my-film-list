"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { info } from "../page";
import Card from "./Card";

interface IResultProps {
  cardsData: info[];
}

const Result: React.FC<IResultProps> = ({ cardsData }) => {
  const searchParams = useSearchParams();
  const order = searchParams.get("order");
  const publishedData =
    order !== "latest"
      ? cardsData
      : [...cardsData].sort((movie1, movie2) => movie2.year - movie1.year);
  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-y-4 justify-items-center pt-5 ">
      {publishedData.map((x, index) => (
        <Card info={x} index={x.id} key={`home-card-${index}`} />
      ))}
    </div>
  );
};

export default Result;

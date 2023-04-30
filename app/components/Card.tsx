import Image from "next/image";
import React from "react";
import { info } from "../page";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";

interface ICardProps {
  info: info;
  index: number;
}

const Card: React.FC<ICardProps> = ({ info, index }) => {
  return (
    <div
      className={`w-96 border-2 border-black dark:border-slate-500 
    bg-slate-100 dark:bg-slate-600 transition-all hover:cursor-pointer
     hover:shadow-2xl hover:shadow-slate-800 dark:hover:shadow-slate-600`}
    >
      <Link href={`/movie/${index}`}>
        <h3 className="flex justify-center items-center text-xl pt-1 pb-1 h-16 bg-slate-500 text-center">
          {info.title}
        </h3>
        <aside className="flex border-black dark:border-slate-500 border-t-2">
          <Image
            src={info.image}
            alt={`Image of ${info.title}`}
            style={{ maxHeight: "100%", width: "auto", objectFit: "cover" }}
            width={140}
            height={250}
            key={`main-page-img-${index}`}
          />
          <div className="flex flex-col justify-between border-black dark:border-slate-500 border-l-2">
            <p className="pl-2 pt-3 pr-2">
              {info.description.length <= 120
                ? info.description
                : info.description.slice(0, 115) + " ..."}
            </p>
            <div className="flex justify-between bg-slate-300 dark:bg-slate-700 pl-4 pr-4">
              <div className="flex items-center gap-1">
                <AiOutlineStar />
                {info.rating}
              </div>
              <div>{info.year}</div>
            </div>
          </div>
        </aside>
      </Link>
    </div>
  );
};

export default Card;

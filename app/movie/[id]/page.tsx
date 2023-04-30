import { getMovieList, info } from "@/app/page";
import Image from "next/image";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

type Params = {
  params: {
    id: number;
  };
};

export default async function MoviePage({ params: { id } }: Params) {
  const data: info[] = await getMovieList();

  const content = data[id - 1];

  const genre = content.genre
    .map((word, i) => {
      word = word.toLowerCase();
      return i === content.genre.length - 1 ? word + "." : word + ", ";
    })
    .join("");

  return (
    <div>
      <h2 className="flex justify-center items-center text-5xl md:text-6xl h-16 text-center sm:mt-5 mt-12 mb-10">
        {content.title}
      </h2>
      <div className="flex justify-between md:flex-row flex-col w-full xl:w-3/5 w-11/12 md:w-4/5 m-auto">
        <div className="rounded flex flex-col ">
          <Image
            src={content.image}
            alt={`Image of ${content.title}`}
            style={{ maxHeight: "100%", width: "auto" }}
            width={450}
            height={700}
            className="rounded-t-xl"
          />
          <div
            className="flex justify-between bg-slate-300
           dark:bg-slate-700 pl-6 pr-6 text-4xl rounded-b-xl"
          >
            <div className="flex justify-between ">
              <AiOutlineStar />
              {content.rating}
            </div>
            <div>{content.year}</div>
          </div>
        </div>
        <article className="md:w-3/5 w-full flex flex-col justify-evenly items-start pr-6 pl-6 pt-2">
          <p className="text-3xl">{content.description}</p>
          <div className="text-3xl">
            <strong className="text-4xl">Genres: </strong> {genre}
            <span className="block pt-4">
              <strong className="text-4xl">Director: </strong>{" "}
              {content.director}
            </span>
          </div>
        </article>
      </div>
    </div>
  );
}

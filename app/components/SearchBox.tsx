"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { ImSearch } from "react-icons/im";

const SearchBox = () => {
  const [search, setSearch] = React.useState<string>("");
  // const inp = useRef<HTMLInputElement>();
  const { push } = useRouter();
  // useEffect(() => {
  //   if (typeof inp.current !== "undefined") {
  //     inp.current.focus();
  //     console.log(inp.current.value);
  //     setSearch(inp.current.value || "");
  //   }
  // }, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (search.split(" ").join("") === "") {
      push("");
    } else {
      push(`/search/${search}`);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-4 mt-4">
      <div className="bg-slate-500 dark:bg-slate-400 rounded-md px-2 py-1">
        <input
          // ref={inp}
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setSearch(e.target.value);
          }}
          className="bg-slate-500 dark:bg-slate-400  focus:outline-none "
        />
        <button className="ml-1">
          <ImSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;

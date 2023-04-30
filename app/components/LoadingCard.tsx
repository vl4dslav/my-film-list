// import Image from "next/image";

import { AiOutlineStar } from "react-icons/ai";

const LoadingCard = () => {
  return (
    <div
      className={`w-96 border-2 border-black dark:border-slate-500 
    bg-slate-100 dark:bg-slate-600 transition-all hover:cursor-pointer
     hover:shadow-2xl hover:shadow-slate-800 dark:hover:shadow-slate-600 animate-pulse`}
    >
      <h3 className="flex justify-center items-center text-xl pt-1 pb-1 h-16 bg-slate-500 text-center">
        {/* {info.title} */}
      </h3>
      <aside className="flex border-black dark:border-slate-500 border-t-2">
        <div className="flex w-64 h-96  bg-slate-400">
          width={140}
          height={250}
          dfdfdfg
        </div>
        <div className=" flex flex-col justify-between border-black dark:border-slate-500 border-l-2">
          <p className="pl-2 pt-3 pr-2 "></p>
          <div className="flex justify-between bg-slate-300 dark:bg-slate-700 pl-4 pr-4">
            <div className="flex items-center gap-1">
              <AiOutlineStar />
              {/* {info.rating} */}
            </div>
            <div>{/* {info.year} */}</div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default LoadingCard;

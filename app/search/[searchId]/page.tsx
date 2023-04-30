import Result from "@/app/components/Result";
import { getMovieList, info } from "@/app/page";
import React from "react";

type Props = {
  params: {
    searchId: string;
  };
};

async function Search({ params: { searchId } }: Props) {
  const allData: info[] = await getMovieList();
  const data: info[] = allData.filter((movieInfo) => {
    const searchStr = decodeURI(searchId).toLowerCase();
    return movieInfo.title.toLowerCase().includes(searchStr);
  });
  return (
    <div>
      {data.length === 0 ? (
        <div className="mt-10 text-center text-3xl ">Nothing has found</div>
      ) : (
        ""
      )}
      <Result cardsData={data} />
    </div>
  );
}

export default Search;

import LoadingCard from "./components/LoadingCard";

const Loading = () => {
  const publishedData = Array.from(Array(8).keys());
  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-y-4 justify-items-center pt-5 ">
      {publishedData.map((x, index) => (
        <LoadingCard key={`loading-${index}`} />
      ))}
    </div>
  );
};

export default Loading;

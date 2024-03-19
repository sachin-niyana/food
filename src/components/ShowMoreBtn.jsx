import React, { useState } from "react";
import { RightArrow } from "./common/Icon";

const ShowMoreBtn = ({ data }) => {
  const [viewAll, setViewAll] = useState(false);

  const toggleShowMore = () => {
    setViewAll(!viewAll);
  };

  return (
    <div>
      <div className={viewAll ? "block" : "hidden"}>{data}</div>

      <div className="flex items-center justify-center mt-[30px] md:mt-[50px]">
        <button
          onClick={toggleShowMore}
          className="bg-linear-gradient-btn hover:shadow-buttonShadow transition-all ease-in-out duration-300 flex items-center font-ClashDisplay text-sm font-medium px-5 py-3 rounded-full gap-1.5"
        >
          <RightArrow />
          {viewAll ? "Hide" : "See All"}
        </button>
      </div>
    </div>
  );
};

export default ShowMoreBtn;

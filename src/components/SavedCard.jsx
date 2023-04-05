import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SavedCard = ({ cuboidImg, setImgLink }) => {
  const navigate = useNavigate();
  const visitCuboid = () => {
    setImgLink(cuboidImg);
  };
  return (
    <div className="flex flex-col">
      <div className="flex w-[250px] mt-10 flex-col justify-center items-center border-2 border-black rounded-md">
        <img src={cuboidImg} alt="" />
      </div>
      <button
        onClick={visitCuboid}
        className="my-2 border w-full border-black rounded-md py-2 px-4 mx-auto hover:bg-black hover:text-white transition-all"
      >
        Apply
      </button>
    </div>
  );
};

export default SavedCard;

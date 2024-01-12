import React from "react";

function Card1({ img, title, txt, price }) {
  return (
    <div className="shadow-xl mob:mx-7 md:mx-0 mob:my-4 my-0">
      <img src={img} alt="" />
      <div className="p-4">
        <p className="bg-[#03CEA4] text-[white] font-bold w-[40%] my-3">
          {title}
        </p>
        <p className="font-bold my-3">{txt}</p>
        <p className="font-mono">{price}</p>
      </div>
    </div>
  );
}

export default Card1;

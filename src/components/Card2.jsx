import React from "react";
import Button from "@mui/material/Button";

const Card2 = ({ data, time, txt, innertxt }) => {
  return (
    <div className="shadow-xl md:w-[30%] p-4">
      <p className="text-[#FF3F3A] font-bold py-3">{data}</p>
      <p className="text-[#787A80] py-2">{time}</p>
      <p className="font-bold py-3">{txt}</p>
      <p className="text-[#787A80] py-2">{innertxt}</p>
      <Button
        variant="contained"
        className="w-[100%]"
        sx={{ background: "#FF3F3A" }}
      >
        View more
      +</Button>
    </div>
  );
};

export default Card2;

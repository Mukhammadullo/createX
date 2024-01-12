import React from 'react';

function Card3({ number, month, data, text, p, btn }) {
    return (
        <div className=" bg-[#fff] py-[15px] flex sm:flex-wrap rounded-[4px]  first-letter items-center gap-7 border-solid hover:translate-x-3  hover:shadow-2xl px-[24px]">
            <h1 className="text-[#FF3F3A] text-[40px] font-bold">{number}</h1>
            <div>
                <h1 className="font-semibold">{month}</h1>
                <p>{data}</p>
            </div>
            <div>
                <h1 className="font-semibold">{text}</h1>
                <p>{p}</p>
            </div>
            <button className='border-[#F75E05] border-[1px] px-[30px] py-[10px] rounded-[4px] text-[#F75E05] hover:bg-[#FF3F3A] hover:text-white'>{btn}</button>
        </div>
    );
}

export default Card3;

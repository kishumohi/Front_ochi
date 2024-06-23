import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="relative card w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full">
            &copy;2019-2012
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
        <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full">
            &copy;2019-2012
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full">
            &copy;2019-2012
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;

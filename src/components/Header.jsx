import { useState, useEffect } from "react";

const Header = () => {
  return (
    <div className="header flex bg-amber-400 p-2.5">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between">
          <div>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white">
              Planner
            </h1>
          </div>
          <div className="flex items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

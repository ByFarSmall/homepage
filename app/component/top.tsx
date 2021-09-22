import React, { FC } from "react";

const Top: FC = () => {
  return (
      <div className="w-4/5 mx-auto">
      <div className="bg-blue-200">
          <div className="flex">
          < div className="flex-1 bg-yellow-200 p-20 text-center">about</div>
          </div>
          <div className="flex">
          <div className="flex-1 bg-green-200 ml-6 mr-3 p-20 my-6 text-center">career</div>
          <div className="flex-1 bg-red-200 ml-3 mr-6 p-20 my-6 text-center">works</div>
          </div>
      </div>
      </div>
  )
};

export default Top;

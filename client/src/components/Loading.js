import React from "react";

export default function Loading() {
  return (
    <div className="absolute right-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-teal-500 border-8 h-20 w-20"></div>
    </div>
  );
}

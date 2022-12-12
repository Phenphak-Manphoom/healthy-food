import React from "react";

export default function Header() {
  return (
    <div className="mt-0 max-md:h-96">
      <div className="header-img relative overflow-hidden">
        <img
          className="food-img object-cover w-full max-md:opacity-90"
          src="https://img.freepik.com/free-photo/oatmeal-dryfruits-with-bird-paradise-flower-white-background_23-2147906999.jpg?size=626&ext=jpg&ga=GA1.2.2064050081.1670661951&semt=sph"
          alt="Healthy food"
        />

        <div className="absolute top-64 left-28 w-96 px-6 py-4 max-md:top-48 max-md:text-left">
          <h1 className="text-black text-2xl mb-1">MEALS THAT GET YOU</h1>
          <h2 className="text-green-700 text-2xl mr-24 mb-1">HEALTHY & FIT</h2>
          <p className="leading-normal text-gray-800 mr-4 text-sm mb-3">
            Change Your Lifestyle For The Better
          </p>
          <a
            href="#filter"
            className="bg-green-700 mr-28   text-white font-bold py-2 px-4 rounded-full"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const Hero = () => {
  return (
    <div className="section-container mb-40 pt-16">
        {/* logo */}
      <svg width="125" height="125" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-16">
        <g stroke="#26BBA4" stroke-width="10" fill="none" fill-rule="evenodd">
          <circle cx="62.5" cy="62.5" r="57.5" />
          <path
            d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0"
            stroke-linecap="round"
          />
        </g>
      </svg>

        <h3>
            A history of everything you copy
        </h3>

        <p className="section-content mb-10 text-2xl">
            Clipboard allows you to track and organize everithing you copy.
            Instantle acces your clipboard on all your devices
        </p>

        <div className="flex flex-col md:flex-row text-xl text-white w-full justify-center space-y-6 md:space-y-0 md:space-x-4">
            <a href="#" className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
                Download for iOS
            </a>
            <a href="#" className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
                Download for Windows
            </a>
        </div>
    </div>
  );
};

export default Hero;

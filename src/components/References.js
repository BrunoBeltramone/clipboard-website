import React from "react";
import googleLogo from "../images/logo-google.png";
import hpLogo from "../images/logo-hp.png";
import ibmLogo from "../images/logo-ibm.png";
import microsoftLogo from "../images/logo-microsoft.png";
import vectorLogo from "../images/logo-vector-graphics.png";

const References = () => {
  return (
    <>
      <div className=" flex flex-col md:flex-row items-center justify-between max-w-6xl space-y-16 md:space-y-0 px-10 mx-auto my-44 ">
        <img src={googleLogo} alt="googleLogo" />
        <img src={hpLogo} alt="hpLogo" />
        <img src={ibmLogo} alt="ibmLogo" />
        <img src={microsoftLogo} alt="microsoftLogo" />
        <img src={vectorLogo} alt="vectorLogo" />
      </div>
      <div className="section-container my-20">
        <h3>Clipboard for iOS and MacOS</h3>
        <p className="section-content text-xl mb-10">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you're ready to start adding to your clipboard.
        </p>

        {/* button container */}
        <div className="button-container">
          <a
            href="#"
            class="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
          >
            Download for iOS
          </a>
          <a
            href="#"
            class="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </>
  );
};

export default References;

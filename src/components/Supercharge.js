import React from "react";
import iconBlacklist from "../images/icon-blacklist.svg";
import iconText from "../images/icon-text.svg";
import iconPreview from "../images/icon-preview.svg";

const Supercharge = () => {
  return (
    <div className="section-container">
      <h3> Supercharge your workflow </h3>
      <p className="section-content text-xl mb-16">
        We’ve got the tools to boost your productivity.
      </p>
      {/* items container */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-16 md:space-y-0 md:space-x-12">
        {/* item 1 */}
        <div className="flex flex-col items-center space-y-5">
          <img src={iconBlacklist} className="mb-6" />
          <h5>Create Blacklist</h5>
          <p className="max-w-md text-grayishBlue">
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>
        {/* item 1 */}
        <div className="flex flex-col items-center space-y-5">
          <img src={iconText} className="mb-6" />
          <h5>Create Blacklist</h5>
          <p className="max-w-md text-grayishBlue">
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>
        {/* item 1 */}
        <div className="flex flex-col items-center space-y-5">
          <img src={iconPreview} className="mb-6" />
          <h5>Create Blacklist</h5>
          <p className="max-w-md text-grayishBlue">
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Supercharge;

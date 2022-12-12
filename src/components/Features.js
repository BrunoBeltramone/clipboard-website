import React from "react";
import image from "../images/image-computer.png";
import imageDevices from "../images/image-devices.png";

const Features = () => {
  return (
    <>
      <div className="section-container my-20">
        <div className="relative flex flex-col md:flex-row md:space-x-32">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={image}
              alt="computer"
              className="md:absolute top-0 right-[50%]"
            />
          </div>
          {/* Items Container */}
          <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:pl-16">
            {/* item 1 */}
            <div>
              <h5>
                Quick Search
              </h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                aplication, and more.
              </p>
            </div>

            {/* item 2 */}
            <div>
              <h5>
                iCloud Sync
              </h5>
              <p className="max-w-md text-grayishBlue">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>

            {/* item 3 */}
            <div>
              <h5>
                Completely History
              </h5>
              <p className="max-w-md text-grayishBlue">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container my-20">
        <h3>Acces clipboard anywhere</h3>
        <p className="section-content text-xl mb-24">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>

        <img src={imageDevices} alt="ImageDevices" class="mx-auto" />
      </div>
    </>
  );
};

export default Features;

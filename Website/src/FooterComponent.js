import React from "react";

const FooterComponent = () => {
  return (
    <footer className=" bottom-0 bg-gray-800 py-4 text-white">
       <div className="flex items-center justify-between">
       <p className="text-center">
       <div>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-base md:mx-4"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-base md:mx-4 "
              >
                FAQs
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-base md:mx-4"
              >
                Contact
              </a>
            </div>
        </p>
        </div>
    </footer>
  );
};

export default FooterComponent;

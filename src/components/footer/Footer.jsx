import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center">
      <footer className="bg-gray-800 w-full text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            <span className="text-xl">&copy; </span>
            {new Date().getFullYear()} Md Absar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

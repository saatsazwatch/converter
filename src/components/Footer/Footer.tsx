import * as React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#161619] w-full">
      <div className="container mx-auto p-5 flex flex-col lg:flex-row space-y-3 md:space-y-0 justify-between items-center text-white">
        <span className="text-sm">
          copyright © 2022 all rights reserved to <a href="/">Saatsaz Watch</a>
        </span>
        <ul className="flex space-x-4 text-sm">
          <li>
            <a href="https://www.saatsazwatch.com/privacy-policy/">Privacy Policy</a>
          </li>
          <li>
            <a href="https://www.saatsazwatch.com/about-us/">About Us</a>
          </li>
          <li>
            <a href="https://www.saatsazwatch.com/contact-us/">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import * as React from "react";
import logo from "../../../static/logo.png";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const links = [
  {
    name: "Home",
    href: "https://www.saatsazwatch.com/",
  },
  {
    name: "Watch Brands",
    href: "https://www.saatsazwatch.com/category/brand/",
  },
  {
    name: "Watch Comparison Chart",
    href: "https://www.saatsazwatch.com/category/compare/",
  },
  {
    name: "Tools",
    href: "https://www.saatsazwatch.com/tools/",
  },
  {
    name: "Contact Us",
    href: "https://www.saatsazwatch.com/contact-us/",
  },
  {
    name: "About Us",
    href: "https://www.saatsazwatch.com/about-us/",
  },
];

export const Header = () => {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="https://saatsazwatch.com/">
              <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <ul className="hidden md:flex space-x-5">
            {links.map((item) => (
              <li>
                <a
                  href={item.href}
                  className="uppercase text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo} alt="Workflow" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {links.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

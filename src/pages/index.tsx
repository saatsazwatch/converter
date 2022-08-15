import * as React from "react";
import { HeadFC, Link } from "gatsby";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { HeadSEO } from "@/seo/Head";

import { CalendarIcon, ClockIcon, CalculatorIcon } from "@heroicons/react/outline";

const features = [
  {
    name: "Time converter",
    description: (
      <p className="mt-2 ml-16 text-base text-gray-500">
        The SaatsazWatch{" "}
        <Link
          to={"/convert-time"}
          className="underline text-primary hover:text-blue-600 font-medium"
        >
          time Converter
        </Link>{" "}
        is a simple tool that helps you convert time between different countries. You just need to
        enter the start time and end time and choose the country where you want to convert.
      </p>
    ),
    icon: ClockIcon,
  },
  {
    name: "Date converter",
    description: (
      <p className="mt-2 ml-16 text-base text-gray-500">
        The SaatsazWatch Date Converter is a handy tool that lets you easily convert dates between
        different countries. Just select the start date, the end date and the country where you want
        the conversion to take place.
      </p>
    ),
    icon: CalculatorIcon,
  },
  {
    name: "Calendar converter",
    description: (
      <p className="mt-2 ml-16 text-base text-gray-500">
        The SaatsazWatch Calendar Converter is a useful tool that converts calendars between
        different countries. You can simply select the start date, end date and the country you want
        to convert to.
      </p>
    ),
    icon: CalendarIcon,
  },
];

const IndexPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="mx-auto container md:w-[51rem] mt-5 px-5 lg:px-0 pb-32">
        <nav className="flex overflow-auto whitespace-nowrap no-scrollbar" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="https://saatsazwatch.com/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Saatsaz Watch
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">tools</span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h1 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
                Saatsaz Watch Tools
              </h1>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                With SaatsazWatch you can use tools like convert time, date and calendar.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h2 className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {feature.name}
                      </h2>
                    </dt>
                    {feature.description}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  const title = "Tools - Saatsaz Watchs";
  const description = "With SaatsazWatch you can use tools like convert time, date and calendar.";
  return <HeadSEO title={title} description={description} />;
};

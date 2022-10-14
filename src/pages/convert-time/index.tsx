import * as React from "react";
import { HeadFC, navigate } from "gatsby";
import ListBox from "@/components/ListBox/ListBox";
import { units } from "../../units";
import { Button } from "@/components/Button/Button";
import { calculate, TimeUnit } from "delta-time";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { HeadSEO } from "@/seo/Head";
import { Linkbox } from "@/components/Linkbox/Linkbox";

const IndexPage = () => {
  const [value, setValue] = React.useState("");
  const [from, setFrom] = React.useState(units[4]);
  const [to, setTo] = React.useState(units[5]);
  const [result, setResult] = React.useState<string | null>(null);

  const handleCalculate = () => {
    const resultFormatted = calculate(
      `${value} ${from.split(" ")[0]}`,
      to.split(" ")[0] as TimeUnit
    );
    navigate(`/convert-time/${from.split(" ")[0]}-to-${to.split(" ")[0]}/`, {
      state: {
        from: from.split(" ")[0],
        to: to.split(" ")[0],
        value: value,
        result: resultFormatted,
      },
    });
    setResult(resultFormatted.toString());
  };

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
                <a
                  href="https://saatsazwatch.com/tools/"
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2"
                >
                  tools
                </a>
              </div>
            </li>
            <li aria-current="page">
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
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">convert time</span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="mt-5">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="shadow sm:rounded-md ">
                <div className="px-4 py-5 bg-white space-y-4 sm:p-6">
                  <div>
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Value To Convert
                    </label>
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      className="focus:ring-primary mt-1 focus:border-primary flex-1 w-full rounded-md sm:text-sm border-gray-300"
                      placeholder="20"
                      onChange={(e) => setValue(e.target.value)}
                      value={value}
                    />
                  </div>

                  <div className="mt-1">
                    <ListBox
                      items={units}
                      label="From"
                      onChange={(value) => setFrom(value)}
                      selected={from}
                    />
                  </div>
                  <div className="mt-1">
                    <ListBox
                      items={units}
                      label="To"
                      onChange={(value) => setTo(value)}
                      selected={to}
                    />
                  </div>
                  <Button onClick={handleCalculate}>Calculate</Button>
                </div>
                <div className="px-4 py-3 bg-gray-50 sm:px-6 flex items-center space-x-2">
                  <span className="block text-sm font-medium text-gray-400">Answer:</span>
                  <span className="block text-sm font-medium text-gray-900">{result}</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 mt-5 lg:mt-0">
              <div>
                <h1 className="text-lg font-medium leading-6 text-gray-900">Time Converter Tool</h1>
                <p className="mt-1 text-sm text-gray-600">
                This advanced time converter tool allows you to change one unit of time to another with ease. Making it a perfect tool for your time conversion math problems.
                </p>
                <p className="mt-1 text-sm text-gray-600">
                This time converter even takes leap years (which have 366 days instead of 365, and happen every four years) into account. It also considers days of a month as 30.44 which is the average of all months which have different days. It’s all MATH!
                </p>
                <h2 className="mt-5 text-lg font-medium leading-6 text-gray-900">How to Use</h2>
                <p className="mt-1 text-sm text-gray-600">
                  Fairly simple…
                  <p className="mt-1 text-sm text-gray-600">
                    <ul>
                      <li>
                      1. Enter a value.
                      </li>
                      <li>
                      2. Select the time unit of the entered value.
                      </li>
                      <li>
                      3. Select the desired time unit (which you want to convert to)
                      </li>
                    </ul>
                  </p>
                <p className="mt-1 text-sm text-gray-600">
                  And the time converter tool will do the calculation.</p>
                </p>
              </div>
            </div>
          </div>
          <h2 className="mt-5 text-lg font-medium leading-6 text-gray-900">Examples</h2>
                <p className="mt-1 text-sm text-gray-600">
                2 days to hours = 48 (which means that there are 48 hours in 2 days.)
                </p>
                <p className="mt-1 text-sm text-gray-600">
                 1 year to days = 365.25 (meaning there are 365 days in a year with a ¼ probability of it being a leap year.)
                </p>
          {/* 
          <h2 className="mt-5 text-lg font-medium leading-6 text-gray-900">
            How to Convert Units of Time
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            To convert units of time You can use the conversion factor to convert from one unit of
            time to another by multiplication or division. Once you know the conversion factor,
            converting between units becomes a simple math problem.
            <p className="font-bold mt-1">S * C = E</p>
            <p>
              S is the starting value, C is the conversion factor, and E is the conversion result.
            </p>
          </p>
          */}
          
        </div>
        <Linkbox />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = (props) => {
  const title = "Time Converter Tool - Saatsaz Watch";
  const description =
    "Convert units of time. Convert fractional time to seconds, minutes, hours, days, weeks, and years. Learn how to convert one unit of time to another.";
  const url = "https://saatsazwatch.com/tools/convert-time/";
  return (
    <HeadSEO title={title} description={description}>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "tools",
              item: "https://saatsazwatch.com/tools/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "convert time",
              item: url,
            },
          ],
        })}
      </script>
    </HeadSEO>
  );
};

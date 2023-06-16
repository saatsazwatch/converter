import * as React from "react";
import { graphql, HeadFC, navigate } from "gatsby";
import ListBox from "@/components/ListBox/ListBox";
import { units } from "../../units";
import { Button } from "@/components/Button/Button";
import { calculate, TimeUnit } from "delta-time";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { Linkbox } from "@/components/Linkbox/Linkbox";
import { HeadSEO } from "@/seo/Head";

interface Props {
  data: {
    unit: {
      from: string;
      to: string;
      meta: {
        name: string;
        slug: string;
      };
    };
  };
  location: {
    state: {
      value: string;
      result: string;
    };
  };
}

const IndexPage = (props: Props) => {
  const [value, setValue] = React.useState(props.location?.state?.value ?? "");
  const [from, setFrom] = React.useState(props.data?.unit?.from ?? units[0]);
  const [to, setTo] = React.useState(props.data?.unit?.to ?? units[1]);
  const [result, setResult] = React.useState<string | null>(props.location?.state?.result ?? null);

  const handleCalculate = () => {
    const resultFormatted = calculate(
      `${value} ${from.split(" ")[0]}`,
      to.split(" ")[0] as TimeUnit
    );
    if (props.data.unit.from !== from.split(" ")[0] || props.data.unit.to !== to.split(" ")[0]) {
      navigate(`/convert-time/${from.split(" ")[0]}-to-${to.split(" ")[0]}/`, {
        state: {
          from: from.split(" ")[0],
          to: to.split(" ")[0],
          value: value,
          result: resultFormatted,
        },
      });
    }
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
                href="https://www.saatsazwatch.com/"
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
                  href="https://www.saatsazwatch.com/tools/"
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
                <a
                  href="https://www.saatsazwatch.com/tools/convert-time/"
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2"
                >
                  convert time
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
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                  {props.data.unit.meta.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="mt-5">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="shadow sm:rounded-md ">
                <div className="px-4 py-5 space-y-4 bg-white sm:p-6">
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
                      className="flex-1 w-full mt-1 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
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
                <div className="flex items-center px-4 py-3 space-x-2 bg-gray-50 sm:px-6">
                  <span className="block text-sm font-medium text-gray-400">Answer:</span>
                  <span className="block text-sm font-medium text-gray-900">{result}</span>
                </div>
              </div>
            </div>
            <div className="mt-5 md:col-span-1 lg:mt-0">
              <div>
                <h1 className="text-lg font-medium leading-6 text-gray-900">
                  {capitalizeFirstLetter(from.split(" ")[0])} to{" "}
                  {capitalizeFirstLetter(to.split(" ")[0])} Converter
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                  This page provides a converter that converts an amount of time from{" "}
                  {from.split(" ")[0]} to {to.split(" ")[0]}.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Linkbox />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query ($id: String!) {
    unit(id: { eq: $id }) {
      from
      to
      meta {
        id
        slug
        description
        name
      }
    }
  }
`;

export const Head: HeadFC = (props) => {
  const meta = (props.data as any)?.unit;
  const fromShort = meta.from.split(" ")[1].replace(/\(|\)/g, "");
  const toShort = meta.to.split(" ")[1].replace(/\(|\)/g, "");
  const from = capitalizeFirstLetter(meta.from.split(" ")[0]);
  const to = capitalizeFirstLetter(meta.to.split(" ")[0]);
  const title = `${from} to ${to} Converter (${fromShort} to ${toShort}) - Saatsaz Watch`;
  const description = `This page provides a converter that converts an amount of time from ${from} to ${to}.`;
  const url = `https://www.saatsazwatch.com/tools/convert-time/${meta.meta.slug}/`;
  return (
    <>
      <HeadSEO title={title} description={description} pathname={`/convert-time/${meta.meta.slug}`}>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "tools",
                item: "https://www.saatsazwatch.com/tools/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "convert time",
                item: "https://www.saatsazwatch.com/tools/convert-time/",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: `${from} to ${to}`,
                item: url,
              },
            ],
          })}
        </script>
      </HeadSEO>
    </>
  );
};

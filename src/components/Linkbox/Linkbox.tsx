import { ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "gatsby";
import React from "react";
import { units } from "../../units";

export const Linkbox = () => {
  const links = units.flatMap((unit) =>
    units.map((unitJ) =>unit.split(" ")[0]!==unitJ.split(" ")[0]&&  ({
      slug: `/convert-time/${unit.split(" ")[0]}-to-${unitJ.split(" ")[0]}/`,
      name: `${unit.split(" ")[0]} to ${unitJ.split(" ")[0]}`,
    }))
  );

  return (
    <div className="flex flex-col mt-20 space-y-5">
      <h2 className="text-lg font-medium leading-6 text-gray-900">Other time conveter tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-3">
        {links.filter(item=>item).map((link) => (
          <Link
            className="text-base md:text-sm text-gray-500 hover:text-gray-900"
            to={link.slug}
            title={link.name}
          >
            {link.name} <ChevronRightIcon width={13} className="inline-block" />
          </Link>
        ))}
      </div>
    </div>
  );
};

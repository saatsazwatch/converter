// https://www.freeformatter.com/string-utilities.html

const units = [
  "nanosecond (ns)",
  "microsecond (µs)",
  "millisecond (ms)",
  "second (sec)",
  "minute (min)",
  "hour (hr)",
  "day (d)",
  "week (wk)",
  "month (mo)",
  "year (yr)",
];

const yaml = [];

units.forEach((unit) => {
  units.forEach((unitJ) => {
    yaml.push(
      `- meta:
    id: ${yaml.length + 1}
    slug: ${unit.split(" ")[0]}-to-${unitJ.split(" ")[0]}
    name:  ${unit.split(" ")[0]} to ${unitJ.split(" ")[0]}
    description: ${unit.split(" ")[0]} to ${unitJ.split(" ")[0]} desc
  from: ${unit}
  to: ${unitJ}`
    );
  });
});

yaml.join("\n");

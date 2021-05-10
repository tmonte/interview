function sum(values: string[]) {
  return values
    .map((v) => parseInt(v))
    .filter((n) => n < 1000)
    .reduce((acc, val) => {
      acc += val;
      return acc;
    }, 0);
}

function getSumDefinition(value: string) {
  if (value.startsWith("//")) {
    return value.substring(value.indexOf("\n") + 1);
  } else {
    return value;
  }
}

function getDelimiterExpression(value: string) {
  if (!value.startsWith("//")) {
    return /,|\n/g;
  }
  const delimiterDefinition = value.substring(
    value.lastIndexOf("//") + 2,
    value.indexOf("\n")
  );
  const delimiters = value.startsWith("//[")
    ? delimiterDefinition.split(/[\[\]]/).filter((v) => !!v)
    : [delimiterDefinition];
  const expr = `,|\\n|${delimiters
    .map((delimiter) =>
      delimiter
        .split("")
        .map((v) => (v === "*" ? `\\${v}` : v))
        .join("")
    )
    .join("|")}`;
  return new RegExp(expr);
}

export function add(value: string): number {
  if (!value) return 0;
  const sumDefinition = getSumDefinition(value);
  const regex = getDelimiterExpression(value);
  const values = sumDefinition.split(regex);
  const negatives = values.filter((value) => value.startsWith("-"));
  if (negatives.length) {
    throw new Error(
      `Negative numbers are not supported: ${negatives.join(",")}`
    );
  }
  return sum(values);
}

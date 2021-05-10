import "jasmine";
import { add } from "./index";

describe("String calculator", () => {
  const values: Array<[string, number]> = [
    ["", 0],
    ["1", 1],
    ["1,2", 3],
    ["1,2,3", 6],
    ["1,2\n3", 6],
    ["1,2,1000", 3],
    ["1,1001,1002", 1],
    ["//;\n1;2", 3],
    ["//[***]\n1***2", 3],
    ["//[***][;;;]\n1***2;;;4", 7],
  ];

  values.forEach(([value, result]) => {
    it(`for sum ${value} should return ${result}`, () => {
      expect(add(value)).toBe(result);
    });
  });

  it(`for sum 1,-2 should throw`, () => {
    expect(() => add("1,-2")).toThrowError(
      "Negative numbers are not supported: -2"
    );
  });

  it(`for sum 1,-2,-3 should throw`, () => {
    expect(() => add("1,-2,-3")).toThrowError(
      "Negative numbers are not supported: -2,-3"
    );
  });
});

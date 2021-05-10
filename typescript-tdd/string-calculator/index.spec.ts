import "jasmine";
import { add } from "./index";

describe("Summing up strings", () => {
  const sums: Array<[string, number]> = [
    ["", 0],
    ["1", 1],
  ];

  sums.forEach(([sum, result]) => {
    it(`for sum ${sum} should return ${result}`, () => {
      expect(add(sum)).toBe(result);
    });
  });
});

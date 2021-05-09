import "jasmine";
import { arabicToRoman } from "./index";

describe("Converting arabic to roman", () => {
  const pairs: Array<[number, string]> = [
    [0, ""],
    [1, "I"],
    [5, "V"],
    [2, "II"],
    [4, "IV"],
  ];

  pairs.forEach(([arabic, roman]) => {
    it(`for ${arabic} should return ${roman}`, () => {
      expect(arabicToRoman(arabic)).toBe(roman);
    });
  });
});

import "jasmine";
import { myFunction } from "./index";

describe("something", () => {
  it("should work", () => {
    expect(myFunction()).toBe(1);
    expect(true).toBe(true);
    expect(1).toBe(1);
  });
});

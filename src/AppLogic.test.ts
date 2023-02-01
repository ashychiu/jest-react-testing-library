import { convertCamelWithSpaces } from "./AppLogic";

describe("spaces before camel-case capital letters", () => {
  test("it works for no inner capital letters", () => {
    expect(convertCamelWithSpaces("Red")).toBe("Red");
  });
  test("it works for one inner captial letter", () => {
    expect(convertCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("it works for multiple inner captial letters", () => {
    expect(convertCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});

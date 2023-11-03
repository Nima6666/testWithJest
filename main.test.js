const main = require("./main");

it("capitalize", () => {
  expect(main.capitalize("amber")).toBe("Amber");
  expect(main.capitalize("testing")).toBe("Testing");
});

it("reverseString", () => {
  expect(main.reverseString("holiday")).toBe("yadiloh");
  expect(main.reverseString("asdjhflkjhlkdf")).toBe("fdklhjklfhjdsa");
});

it("calculates", () => {
  expect(main.calculator.add(5, 10)).toBe(15);
  expect(main.calculator.subtract(10, 4)).toBe(6);
  expect(main.calculator.divide(25, 5)).toBe(5);
  expect(main.calculator.multiply(7, 7)).toBe(49);
});

it("ciphers", () => {
  expect(main.caesarCipher("ABC", 1)).toBe("BCD");
  expect(main.caesarCipher("ajldsfhlkjdfhlkdjf", 16)).toBe(
    "qzbtivxbaztvxbatzv"
  );
  expect(main.caesarCipher("ajhdlfjh!%&!@^%#*&^9kalzzz,mjl", 24)).toBe(
    "yhfbjdhf!%&!@^%#*&^9iyjxxx,khj"
  );
});

it("analyze", () => {
  const array = [1, 8, 3, 4, 2, 6];
  expect(main.analyzeArray(array).average).toBe(4);
  expect(main.analyzeArray(array).min).toBe(1);
  expect(main.analyzeArray(array).max).toBe(8);
  expect(main.analyzeArray(array).length).toBe(6);
});

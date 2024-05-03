import caesarCipher from "../caesarCipher";

test("Returns a string shifted", () => {
  expect(caesarCipher("hello", 0)).toBe("hello");
  expect(caesarCipher("hello", 1)).toBe("ifmmp");
  expect(caesarCipher("hello", 2)).toBe("jgnnq");
  expect(caesarCipher("hello, world", 30)).toBe("lipps, asvph");
  expect(caesarCipher("function that takes an array", 300)).toBe(
    "tibqhwcb hvoh hoysg ob offom"
  );
});

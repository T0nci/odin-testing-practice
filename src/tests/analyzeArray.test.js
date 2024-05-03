import analyzeArray from "../analyzeArray";

test("analyzeArray returns an object with useful properties", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
  expect(analyzeArray([1, 28, 7, 4])).toEqual({
    average: 10,
    min: 1,
    max: 28,
    length: 4,
  });
  expect(analyzeArray([1, 28, 4, 302, 101, 908])).toEqual({
    average: 224,
    min: 1,
    max: 908,
    length: 6,
  });
});

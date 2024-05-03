import calculator from "../calculator";

test("Adding numbers", () => {
  expect(calculator.add(10, 5)).toBeCloseTo(15);
  expect(calculator.add(15, 10)).toBeCloseTo(25);
  expect(calculator.add(1, 2)).toBeCloseTo(3);
});

test("Subtracting numbers", () => {
  expect(calculator.subtract(10, 5)).toBeCloseTo(5);
  expect(calculator.subtract(15, 10)).toBeCloseTo(5);
  expect(calculator.subtract(1, 2)).toBeCloseTo(-1);
});

test("Multiplying numbers", () => {
  expect(calculator.multiply(10, 5)).toBeCloseTo(50);
  expect(calculator.multiply(15, 10)).toBeCloseTo(150);
  expect(calculator.multiply(1, 2)).toBeCloseTo(2);
});

test("Dividing numbers", () => {
  expect(calculator.divide(10, 5)).toBeCloseTo(2);
  expect(calculator.divide(15, 10)).toBeCloseTo(1.5);
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});

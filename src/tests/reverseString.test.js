import reverseString from "../reverseString";

test("String gets reversed", () => {
  expect(reverseString("babel")).toBe("lebab");
  expect(reverseString("jest")).toBe("tsej");
  expect(reverseString("modules")).toBe("seludom");
});

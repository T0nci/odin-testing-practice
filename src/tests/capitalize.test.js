import capitalize from "../capitalize";

test("capitalize function capitalizes first letter", () => {
  expect(capitalize("jest")).toBe("Jest");
  expect(capitalize("modules")).toBe("Modules");
  expect(capitalize("babel")).toBe("Babel");
});

test("capitalize function returns same string if already capitalized", () => {
  expect(capitalize("Jest")).toBe("Jest");
  expect(capitalize("Modules")).toBe("Modules");
  expect(capitalize("Babel")).toBe("Babel");
});

test("capitalize function only changes the first letter", () => {
  expect(capitalize("jEST")).toBe("JEST");
  expect(capitalize("mODules")).toBe("MODules");
  expect(capitalize("bABEL")).toBe("BABEL");
});

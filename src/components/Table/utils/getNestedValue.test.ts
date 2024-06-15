import { getNestedValue } from "./getNestedValue";

describe("getNestedValue", () => {
  it("should return value for a nested path with 3 levels", () => {
    const obj = { a: { b: { c: "value" } } };
    const path = "a.b.c";
    const result = getNestedValue(obj, path);
    expect(result).toBe("value");
  });

  it("should return value for a nested path with 2 levels", () => {
    const obj = { a: { b: "value" } };
    const path = "a.b";
    const result = getNestedValue(obj, path);
    expect(result).toBe("value");
  });
  it("should return the value for a non-nested path", () => {
    const obj = { a: "value" };
    const path = "a";
    const result = getNestedValue(obj, path);
    expect(result).toBe("value");
  });

  it("should return undefined for a non-existent path", () => {
    const obj = { a: { b: { c: "value" } } };
    const path = "a.b.d";
    const result = getNestedValue(obj, path);
    expect(result).toBeUndefined();
  });

  it("should return the object itself for an empty path", () => {
    const obj = { a: { b: { c: "value" } } };
    const path = "";
    const result = getNestedValue(obj, path);
    expect(result).toBeUndefined();
  });

  it("should return undefined for an empty object", () => {
    const obj = {};
    const path = "a.b.c";
    const result = getNestedValue(obj, path);
    expect(result).toBeUndefined();
  });
});

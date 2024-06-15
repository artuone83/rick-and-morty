import { getUrlSearchQuery } from "./getUrlSearchQuery";

describe("getUrlSearchQuery", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/");
  });

  it("should return the value of the query parameter", () => {
    window.history.pushState({}, "", "/?key=value");
    const result = getUrlSearchQuery("key");
    expect(result).toBe("value");
  });

  it("should return null if the query parameter is not present", () => {
    const result = getUrlSearchQuery("nonExistentKey");
    expect(result).toBeNull();
  });

  it("should decode URI-encoded query parameter keys", () => {
    window.history.pushState({}, "", "/?key%20with%20spaces=value");
    const result = getUrlSearchQuery("key with spaces");
    expect(result).toBe("value");
  });

  it("should handle multiple query parameters with the same key", () => {
    window.history.pushState({}, "", "/?key=value1&key=value2");
    const result = getUrlSearchQuery("key");
    expect(result).toBe("value1");
  });

  it("should handle empty query parameter values", () => {
    window.history.pushState({}, "", "/?key=");
    const result = getUrlSearchQuery("key");
    expect(result).toBe("");
  });
});

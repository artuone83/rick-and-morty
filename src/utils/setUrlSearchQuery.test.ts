import { setUrlSearchQuery } from "./setUrlSearchQuery";

describe("setUrlSearchQuery", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/");
  });

  it("should set a single query parameter", () => {
    setUrlSearchQuery({ key: "value" });
    expect(window.location.search).toBe("?key=value");
  });

  it("should set multiple query parameters", () => {
    setUrlSearchQuery({ key1: "value1", key2: "value2" });
    expect(window.location.search).toBe("?key1=value1&key2=value2");
  });

  it("should encode special characters in the value", () => {
    setUrlSearchQuery({ key: "value with spaces" });
    expect(window.location.search).toBe("?key=value+with+spaces");
  });

  it("should not set a query parameter with an empty value", () => {
    setUrlSearchQuery({ key1: "value1", key2: "" });
    expect(window.location.search).toBe("?key1=value1");
  });

  it("should not set any query parameters for an empty object", () => {
    setUrlSearchQuery({});
    expect(window.location.search).toBe("");
  });

  it("should preserve existing query parameters", () => {
    window.history.pushState({}, "", "/?existing=param");
    setUrlSearchQuery({ key: "value" });
    expect(window.location.search).toBe("?existing=param&key=value");
  });

  it("should override existing query parameters with the same key", () => {
    window.history.pushState({}, "", "/?key=oldValue");
    setUrlSearchQuery({ key: "newValue" });
    expect(window.location.search).toBe("?key=newValue");
  });
});

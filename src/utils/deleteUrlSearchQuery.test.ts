import { deleteUrlSearchQuery } from "./deleteUrlSearchQuery";

describe("deleteUrlSearchQuery", () => {
  beforeEach(() => {
    window.history.replaceState({}, "", "/");
  });

  it("should remove all query parameters from the URL", () => {
    window.history.replaceState({}, "", "/?key1=value1&key2=value2");
    deleteUrlSearchQuery();
    expect(window.location.search).toBe("");
  });

  it("should not modify the URL if there are no query parameters", () => {
    const currentUrl = window.location.href;
    deleteUrlSearchQuery();
    expect(window.location.href).toBe(currentUrl);
  });

  it("should remove the query string but preserve the hash fragment", () => {
    window.history.replaceState({}, "", "/?key=value");
    deleteUrlSearchQuery();
    expect(window.location.href).toBe(`${window.location.origin}/`);
  });

  it("should remove the query string but preserve the base URL", () => {
    window.history.replaceState({}, "", "/path?key=value");
    deleteUrlSearchQuery();
    expect(window.location.href).toBe(`${window.location.origin}/path`);
  });
});

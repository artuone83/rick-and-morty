export const setUrlSearchQuery = (obj: Record<string, string>): void => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, value);
    }
  });

  const newUrl = `${window.location.pathname}?${searchParams.toString()}`;

  window.history.pushState({}, '', newUrl);
};

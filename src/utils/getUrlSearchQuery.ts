export const getUrlSearchQuery = (keys: string[]): (string | null)[] => {
  const searchParams = new URLSearchParams(window.location.search);

  return keys.map((key) => searchParams.get(decodeURIComponent(key)));
};

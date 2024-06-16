export const deleteUrlSearchQueryByKey = (keys: string[]) => {
  const currentUrl = window.location.href;
  const baseUrl = currentUrl.split("?")[0];
  const searchParams = new URLSearchParams(window.location.search);

  keys.forEach((key) => {
    searchParams.delete(key);
  });

  const newUrl = `${baseUrl}?${searchParams.toString()}`;
  console.log(searchParams.toString());

  if (newUrl !== currentUrl) {
    window.history.pushState({}, "", newUrl);
  }
};

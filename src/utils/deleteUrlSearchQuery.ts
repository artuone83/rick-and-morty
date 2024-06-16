export const deleteUrlSearchQuery = () => {
  const currentUrl = window.location.href;
  const baseUrl = currentUrl.split("?")[0];
  const newUrl = baseUrl;

  window.history.pushState({}, "", newUrl);
};

import { deleteUrlSearchQueryByKey } from './deleteUrlSearchQueryByKey';

describe('deleteUrlSearchQueryByKey', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
  });

  it('should remove the specified query parameters from the URL', () => {
    window.history.replaceState({}, '', '/?key1=value1&key2=value2&key3=value3');
    deleteUrlSearchQueryByKey(['key1', 'key3']);
    expect(window.location.search).toBe('?key2=value2');
  });

  it('should not modify the URL if the specified keys are not present', () => {
    window.history.replaceState({}, '', '/?key1=value1&key2=value2');
    const currentUrl = window.location.href;
    deleteUrlSearchQueryByKey(['key3', 'key4']);
    expect(window.location.href).toBe(currentUrl);
  });

  it('should remove all query parameters if all keys are specified', () => {
    window.history.replaceState({}, '', '/?key1=value1&key2=value2&key3=value3');
    deleteUrlSearchQueryByKey(['key1', 'key2', 'key3']);
    expect(window.location.search).toBe('');
  });
});

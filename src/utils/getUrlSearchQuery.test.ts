import { getUrlSearchQuery } from './getUrlSearchQuery';

describe('getUrlSearchQuery', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/');
  });

  it('should return an empty array if no keys are provided', () => {
    const result = getUrlSearchQuery([]);
    expect(result).toEqual([]);
  });

  it('should return null for keys that have no corresponding value', () => {
    window.history.pushState({}, '', '/?key1=value1&key2=');
    const result = getUrlSearchQuery(['key1', 'key2', 'key3']);
    expect(result).toEqual(['value1', '', null]);
  });

  it('should handle multiple values for the same key', () => {
    window.history.pushState({}, '', '/?key=value1&key=value2');
    const result = getUrlSearchQuery(['key']);
    expect(result).toEqual(['value1']);
  });

  it('should handle encoded special characters in query parameter values', () => {
    window.history.pushState({}, '', '/?key=value%20with%20spaces');
    const result = getUrlSearchQuery(['key']);
    expect(result).toEqual(['value with spaces']);
  });

  it('should handle encoded special characters in query parameter keys', () => {
    window.history.pushState({}, '', '/?key%20with%20spaces=value');
    const result = getUrlSearchQuery(['key with spaces']);
    expect(result).toEqual(['value']);
  });
});

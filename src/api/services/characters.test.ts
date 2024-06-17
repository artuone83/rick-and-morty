import { getKeyValueUrlFiltersList } from './characters';

describe('getKeyValueUrlFiltersList', () => {
  it('should return an empty array when filters are empty', () => {
    const filters = {};
    const result = getKeyValueUrlFiltersList(filters);
    expect(result).toEqual([]);
  });

  it('should return an array of key-value pairs for non-empty filters', () => {
    const filters = { name: 'John', age: '30' };
    const result = getKeyValueUrlFiltersList(filters);
    expect(result).toEqual(['name=John', 'age=30']);
  });

  it('should exclude filters with falsy values', () => {
    const filters = { name: 'John', age: '', isActive: false };
    const result = getKeyValueUrlFiltersList(filters);
    expect(result).toEqual(['name=John']);
  });
});

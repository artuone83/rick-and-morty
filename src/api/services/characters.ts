import { api } from '../api';
import { API_PATHS } from '../const';
import { Character, CharacterFilters, Info } from '../types/interfaces';

export const getKeyValueUrlFiltersList = (filters: CharacterFilters): string[] => {
  return Object.entries(filters).reduce<string[]>((acc, [key, value]) => {
    if (value) {
      acc.push(`${key}=${value}`);
    }
    return acc;
  }, []);
};

export const fetchCharacters = async (filters: CharacterFilters): Promise<Info<Character[]>> => {
  const urlPath = `/${API_PATHS.CHARACTERS}/`;
  const keyValueUrlFiltersList = getKeyValueUrlFiltersList(filters);

  const response = await api.get([urlPath, keyValueUrlFiltersList.join('&')].join('?'));

  return response.data;
};

export const fetchCharacterById = async (id: number): Promise<Character> => {
  const response = await api.get(`/${API_PATHS.CHARACTERS}/${id}`);

  return response.data;
};

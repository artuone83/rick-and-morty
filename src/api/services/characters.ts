import { api } from '../api';
import { API_PATHS } from '../const';
import { Character, CharacterFilters, Info } from '../types/interfaces';

export const fetchCharacters = async ({
  name,
  species,
  page,
  status,
}: CharacterFilters): Promise<Info<Character[]>> => {
  let url = `/${API_PATHS.CHARACTERS}?page=${page}`;

  if (name) {
    url += `&name=${name}`;
  }

  if (species) {
    url += `&species=${species}`;
  }

  if (status) {
    url += `&species=${status}`;
  }

  const response = await api.get(url);

  return response.data;
};

export const fetchCharacterById = async (id: number): Promise<Character> => {
  const response = await api.get(`/${API_PATHS.CHARACTERS}/${id}`);

  return response.data;
};

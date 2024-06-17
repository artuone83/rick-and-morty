import { Character } from '../api/types/interfaces';

export type CharacterFilters = Partial<Pick<Character, 'name' | 'species' | 'status'>>;

export type PropsWithRequiredChildren<P = {}> = {
  children: React.ReactNode;
} & P;

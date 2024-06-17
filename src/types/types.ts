import React from 'react';
import { Character } from '../api/types/interfaces';

export type CharacterFilters = Partial<Pick<Character, 'name' | 'species' | 'status'>>;

export type PropsWithRequiredChildren<P = object> = {
  children: React.ReactNode;
} & P;

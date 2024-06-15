import { Character } from "../api/types/interfaces";

export type CharacterFilters = Pick<Character, "name" | "species">;

export type PropsWithRequiredChildren<P = {}> = {
  children: React.ReactNode;
} & P;

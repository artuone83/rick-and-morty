import { useEffect } from 'react';
import { Character } from 'api/types/interfaces';
import { getUrlSearchQuery } from 'utils/getUrlSearchQuery';

export const useUrlSearchQueryFilters = (
  setPage: React.Dispatch<React.SetStateAction<number | null>>,
  setActiveFilters: React.Dispatch<React.SetStateAction<Partial<Pick<Character, 'status' | 'species' | 'name'>>>>,
): void => {
  useEffect(() => {
    const [pageFilter, nameFilter, statusFilter, speciesFilter] = getUrlSearchQuery([
      'page',
      'name',
      'status',
      'species',
    ]);
    const activeFiltersInUrl = [nameFilter, statusFilter, speciesFilter].some((value) => value);

    if (pageFilter !== null && !activeFiltersInUrl) {
      setPage(parseInt(pageFilter, 10));
    } else if (activeFiltersInUrl) {
      setActiveFilters({
        name: nameFilter ?? '',
        status: statusFilter ?? '',
        species: speciesFilter ?? '',
      });
    } else {
      setPage(0);
    }
  }, [setPage, setActiveFilters]);
};

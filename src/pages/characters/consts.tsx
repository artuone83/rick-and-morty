import { Avatar } from '@mui/material';
import { Character } from 'api/types/interfaces';
import { Column } from 'components/table/Table';
import { CharacterFilters } from 'types/types';

export const COLUMNS: Column<Character>[] = [
  {
    label: 'Image',
    accessor: 'image',
    renderComponent: (_value, rowValue) => (
      <Avatar alt={rowValue.name} src={rowValue.image} sx={{ width: 56, height: 56 }} />
    ),
  },
  { label: 'Name', accessor: 'name', sortable: true },
  { label: 'Status', accessor: 'status', sortable: true },
  { label: 'Species', accessor: 'species', sortable: true },
  { label: 'Gender', accessor: 'gender', sortable: true },
  { label: 'Origin', accessor: 'origin.name', sortable: true },
  { label: 'Location', accessor: 'location.name', sortable: true },
];

export const FILTERS_DEFAULT_VALUES: CharacterFilters = {
  name: '',
  status: '',
  species: '',
};

export const rowsPerPageDivisor: Record<number, number> = {
  5: 4,
  10: 2,
  20: 1,
};

export const rowsPerPageOptions = [5, 10, 20];

import { Character } from 'api/types/interfaces';
import { EpisodesListCell } from 'components/Table/EpisodesListCell';
import { Column } from 'components/Table/Table';

export const COLUMNS: Column<Character>[] = [
  { label: 'Status', accessor: 'status' },
  { label: 'Species', accessor: 'species' },
  { label: 'Gender', accessor: 'gender' },
  { label: 'Origin', accessor: 'origin.name' },
  { label: 'Location', accessor: 'location.name' },
  {
    label: 'Episode',
    accessor: 'episode',
    renderComponent: (value) => <EpisodesListCell episodes={value as string[]} />,
  },
];

import React, { useMemo, useRef, useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Typography, TablePagination, Avatar } from '@mui/material';

import { fetchCharacters } from 'api/services/characters';
import { API_PATHS } from 'api/const';
import { Character } from 'api/types/interfaces';
import { CharacterFilters } from 'types/types';
import { Column, Table } from 'components/Table/Table';
import { Filters } from './components/Filters';
import { setUrlSearchQuery } from 'utils/setUrlSearchQuery';
import { CharacterDetails } from './components/CharacterDetails';
import { deleteUrlSearchQuery } from 'utils/deleteUrlSearchQuery';
import Modal from 'components/modal/Modal';
import { deleteUrlSearchQueryByKey } from 'utils/deleteUrlSearchQueryByKey';
import { useUrlSearchQueryFilters } from 'hooks/useUrlSearchQueryFilters';
import { PageCounter } from 'components/Table/PageCounter';
import { ErrorMessage } from 'components/ErrorMessage';
import { LoadingIndicator } from 'components/LoadingIndicator';

const COLUMNS: Column<Character>[] = [
  {
    label: 'Image',
    accessor: 'image',
    renderComponent: (value, rowValue) => (
      <Avatar alt={rowValue.name} src={value as string} sx={{ width: 56, height: 56 }} />
    ),
  },
  { label: 'Name', accessor: 'name', sortable: true },
  { label: 'Status', accessor: 'status', sortable: true },
  { label: 'Species', accessor: 'species', sortable: true },
  { label: 'Gender', accessor: 'gender', sortable: true },
  { label: 'Origin', accessor: 'origin.name', sortable: true },
  { label: 'Location', accessor: 'location.name', sortable: true },
];

const FILTERS_DEFAULT_VALUES: CharacterFilters = {
  name: '',
  status: '',
  species: '',
};

export const Characters = () => {
  const nameFilterInput = useRef<HTMLInputElement | null>(null);
  const statusFilterInput = useRef<HTMLInputElement | null>(null);
  const speciesFilterInput = useRef<HTMLInputElement | null>(null);
  useRef(null);

  const [activeFilters, setActiveFilters] = useState<CharacterFilters>({
    ...FILTERS_DEFAULT_VALUES,
  });
  const [filtersValues, setFiltersValues] = useState<string>(`${Object.values(activeFilters)}`);
  const [page, setPage] = useState<number | null>(null);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, error, isLoading, isFetching, status, isError } = useQuery({
    queryKey: [API_PATHS.CHARACTERS, filtersValues, page],
    queryFn: () =>
      fetchCharacters({
        name: activeFilters.name,
        species: activeFilters.species,
        status: activeFilters.status,
        page: page !== null ? page + 1 : undefined,
      }),
    placeholderData: keepPreviousData,
    enabled: page !== null || Object.values(activeFilters).some((value) => value),
  });

  useUrlSearchQueryFilters(setPage, setActiveFilters);

  const rowActions = useMemo(() => {
    return [
      {
        name: 'View',
        handler: (rowValue: Character) => {
          setIsModalOpen(true);
          setUrlSearchQuery({
            id: rowValue.id.toString(),
          });
        },
      },
    ];
  }, []);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
    setUrlSearchQuery({
      page: `${newPage}`,
    });
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleApplyFilters = () => {
    setPage(0);
    setFiltersValues(`${Object.values(activeFilters)}`);
    setUrlSearchQuery({
      name: activeFilters.name ?? '',
      status: activeFilters.status ?? '',
      species: activeFilters.species ?? '',
    });
  };

  const handleClearFilters = () => {
    nameFilterInput.current!.blur();
    statusFilterInput.current!.blur();
    speciesFilterInput.current!.blur();

    const newFilters = {
      ...FILTERS_DEFAULT_VALUES,
    };

    setPage(0);
    setActiveFilters(newFilters);
    setFiltersValues(`${Object.values(newFilters)}`);
    deleteUrlSearchQuery();
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setActiveFilters((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    deleteUrlSearchQueryByKey(['id']);
  };

  const areFiltersInUse = Object.values(activeFilters).some((value) => value);
  const areFiltersButtonsDisabled = isFetching || !areFiltersInUse;
  const areFiltersFetching = areFiltersInUse && isFetching;

  let totalRows = data?.info?.count ?? 0;

  if (rowsPerPage === 10) {
    totalRows = Math.ceil(totalRows / 2);
  }

  const totalPages = data?.info?.pages ?? 0;
  const displayedResults = (data?.results || []).slice(0, rowsPerPage);
  const labelDisplayPages = () => (
    <PageCounter currentPage={page === null ? 1 : page + 1} totalPages={totalPages} isError={isError} />
  );

  return (
    <>
      <Typography variant="h1" mb={3} fontSize="2rem">
        Rick and Morty Characters
      </Typography>

      <Filters
        nameFilterInputRef={nameFilterInput}
        statusFilterInputRef={statusFilterInput}
        speciesFilterInputRef={speciesFilterInput}
        onApplyFiltersClick={handleApplyFilters}
        onClearFiltersClick={handleClearFilters}
        buttonsDisabled={areFiltersButtonsDisabled}
        onChange={handleFilterChange}
        filtersValues={activeFilters}
        isFetching={areFiltersFetching}
      />

      <ErrorMessage error={error} status={status} />

      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Table
          data={displayedResults}
          columns={COLUMNS}
          defaultSortBy="name"
          rowActions={rowActions}
          pagination={
            <TablePagination
              component="div"
              count={totalRows}
              page={page ?? 0}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[10, 20]}
              labelDisplayedRows={labelDisplayPages}
              showFirstButton
              showLastButton
            />
          }
        />
      )}

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <CharacterDetails />
      </Modal>
    </>
  );
};

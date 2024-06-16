import React, { useMemo, useRef, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  Typography,
  CircularProgress,
  TablePagination,
  Avatar,
  Box,
} from "@mui/material";

import { fetchCharacters } from "../../api/services/characters";
import { API_PATHS } from "../../api/const";
import { Character } from "../../api/types/interfaces";
import { CharacterFilters } from "../../types/types";
import { Column, Table } from "../../components/table/Table";
import { Filters } from "./components/Filters";
import { setUrlSearchQuery } from "../../utils/setUrlSearchQuery";
import { CharacterDetails } from "./components/CharacterDetails";
import { deleteUrlSearchQuery } from "../../utils/deleteUrlSearchQuery";
import Modal from "../../components/modal/Modal";

const COLUMNS: Column<Character>[] = [
  {
    label: "Image",
    accessor: "image",
    renderComponent: (value, rowValue) => (
      <Avatar
        alt={rowValue.name}
        src={value as string}
        sx={{ width: 56, height: 56 }}
      />
    ),
  },
  { label: "Name", accessor: "name", sortable: true },
  { label: "Status", accessor: "status", sortable: true },
  { label: "Species", accessor: "species", sortable: true },
  { label: "Gender", accessor: "gender", sortable: true },
  { label: "Origin", accessor: "origin.name", sortable: true },
  { label: "Location", accessor: "location.name", sortable: true },
];

const FILTERS_DEFAULT_VALUES: CharacterFilters = {
  name: "",
  status: "",
  species: "",
};

export const Characters = () => {
  const nameFilterInput = useRef<HTMLInputElement | null>(null);
  const statusFilterInput = useRef<HTMLInputElement | null>(null);
  const speciesFilterInput = useRef<HTMLInputElement | null>(null);
  useRef(null);

  const [activeFilters, setActiveFilters] = useState<CharacterFilters>({
    ...FILTERS_DEFAULT_VALUES,
  });
  const [filtersValues, setFiltersValues] = useState<string>(
    `${Object.values(activeFilters)}`
  );
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, error, isLoading, isFetching, status } = useQuery({
    queryKey: [API_PATHS.CHARACTERS, filtersValues, page],
    queryFn: () =>
      fetchCharacters({
        name: activeFilters.name,
        species: activeFilters.species,
        status: activeFilters.status,
        page: page + 1,
      }),
    placeholderData: keepPreviousData,
  });

  const rowActions = useMemo(() => {
    return [
      {
        name: "View",
        handler: (rowValue: Character) => {
          setIsModalOpen(true);
          setUrlSearchQuery({
            id: rowValue.id.toString(),
          });
        },
      },
    ];
  }, [setIsModalOpen]);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleApplyFilters = () => {
    setPage(0);
    setFiltersValues(`${Object.values(activeFilters)}`);
    setUrlSearchQuery({
      name: nameFilterInput.current?.value ?? "",
      status: statusFilterInput.current?.value ?? "",
      species: speciesFilterInput.current?.value ?? "",
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

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setActiveFilters((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    deleteUrlSearchQuery();
  };

  let errorContent = null;

  if (error) {
    errorContent = (
      <>
        <Typography variant="body1" color="error">
          {status.toUpperCase()}: Failed to fetch characters
        </Typography>
        <Typography variant="body1" color="error">
          {error instanceof Error ? error.message : ""}
        </Typography>
      </>
    );
  }

  const areFiltersButtonsDisabled =
    isFetching ||
    (!activeFilters.name && !activeFilters.status && !activeFilters.species);
  const areFiltersFetching =
    Object.values(activeFilters).some((value) => value) && isFetching;

  const totalResults = data?.info?.count ?? 0;
  const displayedResults = (data?.results || []).slice(0, rowsPerPage);

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

      {errorContent}

      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Table
          data={displayedResults}
          columns={COLUMNS}
          defaultSortBy="name"
          rowActions={rowActions}
          pagination={
            <TablePagination
              component="div"
              count={totalResults}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[10, 20]}
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

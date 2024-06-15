import React, { useRef, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  Typography,
  CircularProgress,
  TablePagination,
  Avatar,
} from "@mui/material";

import { fetchCharacters } from "../../api/services/characters";
import { API_PATHS } from "../../api/const";
import { Character } from "../../api/types/interfaces";
import { CharacterFilters } from "../../types/types";
import { Column, Table } from "../../components/table/Table";
import { Filters } from "./components/filters/Filters";

const COLUMNS: Column<Character>[] = [
  {
    label: "Image",
    accessor: "image",
    renderComponent: (value, rowValue) => (
      <Avatar alt={rowValue.name} src={value} sx={{ width: 56, height: 56 }} />
    ),
  },
  { label: "Name", accessor: "name", sortable: true },
  { label: "Status", accessor: "status", sortable: true },
  { label: "Species", accessor: "species", sortable: true },
  { label: "Gender", accessor: "gender", sortable: true },
  { label: "Origin", accessor: "origin.name", sortable: true },
  { label: "Location", accessor: "location.name", sortable: true },
];

export const Characters = () => {
  const nameFilterInput = useRef<HTMLInputElement | null>(null);
  const speciesFilterInput = useRef<HTMLInputElement | null>(null);
  useRef(null);
  const [activeFilters, setActiveFilters] = useState<CharacterFilters>({
    name: "",
    species: "",
  });
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const { data, error, isLoading } = useQuery({
    queryKey: [
      API_PATHS.CHARACTERS,
      activeFilters.name,
      activeFilters.species,
      page,
    ],
    queryFn: () =>
      fetchCharacters({
        name: activeFilters.name,
        species: activeFilters.species,
        page: page + 1,
      }),
    placeholderData: keepPreviousData,
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleApplyFilters = () => {
    setPage(0);
    setActiveFilters((state) => ({
      ...state,
      name: nameFilterInput.current?.value ?? "",
      species: speciesFilterInput.current?.value ?? "",
    }));
  };

  const handleClearFilters = () => {
    setPage(0);
    setActiveFilters(() => ({
      name: "",
      species: "",
    }));
    nameFilterInput.current!.value = "";
    speciesFilterInput.current!.value = "";
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Typography variant="h6" color="error">
        Failed to fetch characters
        {error.message}
      </Typography>
    );
  }

  const totalResults = data?.info?.count ?? 0;
  const displayedResults = (data?.results || []).slice(0, rowsPerPage);

  return (
    <>
      <Typography variant="h4" mb={3}>
        Rick and Morty Characters
      </Typography>

      <Filters
        nameFilterInputRef={nameFilterInput}
        speciesFilterInputRef={speciesFilterInput}
        onApplyFiltersClick={handleApplyFilters}
        onClearFiltersClick={handleClearFilters}
      />

      <Table
        data={displayedResults}
        columns={COLUMNS}
        defaultSortBy="name"
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
    </>
  );
};

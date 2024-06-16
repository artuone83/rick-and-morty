import { Avatar, Box, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { API_PATHS } from "api/const";
import { fetchCharacterById } from "api/services/characters";
import { Character } from "api/types/interfaces";
import { Column, Table } from "components/table/Table";
import { getUrlSearchQuery } from "utils/getUrlSearchQuery";
import { EpisodesListCell } from "components/table/EpisodesListCell";

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
  { label: "Status", accessor: "status" },
  { label: "Species", accessor: "species" },
  { label: "Gender", accessor: "gender" },
  { label: "Origin", accessor: "origin.name" },
  { label: "Location", accessor: "location.name" },
  {
    label: "Episode",
    accessor: "episode",
    renderComponent: (value) => (
      <EpisodesListCell episodes={value as string[]} />
    ),
  },
];

export const CharacterDetails = () => {
  const id = getUrlSearchQuery("id");
  const { data, error, isLoading, status } = useQuery({
    queryKey: [`${API_PATHS.CHARACTERS}/${id}`],
    queryFn: () => fetchCharacterById(parseInt(id!)),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="body1" color="error">
        {status.toUpperCase()}: {error.message}
      </Typography>
    );
  }

  return data ? (
    <>
      <Typography variant="h5" component="p" mb={2} fontWeight="bold">
        {data.name}
      </Typography>
      <Table data={[data]} columns={COLUMNS} />
    </>
  ) : null;
};

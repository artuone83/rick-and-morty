import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { API_PATHS } from "../../../api/const";
import { fetchCharacterById } from "../../../api/services/characters";
import { getUrlSearchQuery } from "../../../utils/getUrlSearchQuery";

export const CharacterDetails = () => {
  const id = getUrlSearchQuery("id");
  const { data, error, isLoading } = useQuery({
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
    return <div>Error: {error.message}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

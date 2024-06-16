import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { api } from "../../../api/api";
import { Episode } from "../../../api/types/interfaces";

export const EpisodesList = ({ episodes }: { episodes: string[] }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["episode"],
    queryFn: async (): Promise<Episode[]> => {
      const ids = episodes.map((url) => new URL(url).pathname.split("/").pop());

      const response = await api.get(`/episode/${ids}`);

      return response.data;
    },
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }

  console.log(data);

  let result = null;

  if (data) {
    result = Array.isArray(data) ? data : [data];
  }

  const episodeNames = (result ?? []).map((episode) => episode.name);

  return (
    <List
      dense
      sx={{
        width: "100%",
        maxWidth: 250,
        position: "relative",
        overflow: "auto",
        maxHeight: 350,
        padding: 0,
      }}
    >
      {episodeNames.map((name) => (
        <ListItem key={`item-${name}`} sx={{ padding: 0 }} disableGutters>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );
};

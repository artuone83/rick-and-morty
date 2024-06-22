import { CircularProgress, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { api } from 'api/api';
import { API_PATHS } from 'api/const';
import { Episode } from 'api/types/interfaces';

interface EpisodesListCellProps {
  episodes: string[];
}

export const EpisodesListCell = ({ episodes }: EpisodesListCellProps): JSX.Element => {
  const ids = episodes.map((url) => new URL(url).pathname.split('/').pop());
  const { data, isLoading, error } = useQuery({
    queryKey: [API_PATHS.EPISODES, ids],
    queryFn: async (): Promise<Episode[]> => {
      const response = await api.get(`/${API_PATHS.EPISODES}/${ids}`);

      return response.data;
    },
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }

  let result = null;

  if (data) {
    result = Array.isArray(data) ? data : [data];
  }

  const episodeNames = (result ?? []).map((episode) => episode.name);

  return (
    <List
      dense
      sx={{
        position: 'relative',
        overflow: 'auto',
        minWidth: 250,
        maxHeight: 150,
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

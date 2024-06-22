import { Avatar, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { API_PATHS } from 'api/const';
import { fetchCharacterById } from 'api/services/characters';
import { getUrlSearchQuery } from 'utils/getUrlSearchQuery';
import { ErrorMessage } from 'components/ErrorMessage';
import { LoadingIndicator } from 'components/LoadingIndicator';
import { Table } from 'components/tempTable/Table';
import { COLUMNS } from './consts';

export const CharacterDetails = () => {
  const [id] = getUrlSearchQuery(['id']);
  const { data, error, isLoading, status } = useQuery({
    queryKey: [`${API_PATHS.CHARACTERS}/${id}`],
    queryFn: () => fetchCharacterById(parseInt(id!)),
    enabled: !!id,
  });

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <ErrorMessage error={error} status={status} />
      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <Avatar alt={data?.name} src={data?.image} sx={{ width: 86, height: 86 }} />
        <Typography variant="h5" component="p" fontWeight="bold">
          {data?.name}
        </Typography>
      </Stack>
      <Table data={data ? [data] : []} columns={COLUMNS} />
    </>
  );
};

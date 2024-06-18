import { Typography } from '@mui/material';

interface ErrorMessageProps {
  error: Error | null;
  status: 'error' | 'success' | 'pending';
}

export const ErrorMessage = ({ error, status }: ErrorMessageProps): JSX.Element | null => {
  if (!error) {
    return null;
  }

  return (
    <>
      <Typography variant="body1" color="error">
        {status.toUpperCase()}: Failed to fetch characters
      </Typography>
      {error instanceof Error && (
        <Typography variant="body1" color="error">
          {error.message}
        </Typography>
      )}
    </>
  );
};

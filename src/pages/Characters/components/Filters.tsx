import { Grid, TextField, Button, Box, CircularProgress } from '@mui/material';
import { CharacterFilters } from 'types/types';

interface FiltersProps {
  nameFilterInputRef: React.RefObject<HTMLInputElement>;
  statusFilterInputRef: React.RefObject<HTMLInputElement>;
  speciesFilterInputRef: React.RefObject<HTMLInputElement>;
  buttonsDisabled: boolean;
  filtersValues: CharacterFilters;
  isFetching: boolean;
  onApplyFiltersClick: () => void;
  onClearFiltersClick: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const Filters = ({
  nameFilterInputRef,
  statusFilterInputRef,
  speciesFilterInputRef,
  buttonsDisabled,
  filtersValues,
  isFetching,
  onApplyFiltersClick,
  onClearFiltersClick,
  onChange,
}: FiltersProps): JSX.Element => {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onApplyFiltersClick();
  };

  return (
    <Box component="form" onSubmit={handleFormSubmit}>
      <Grid container spacing={2} alignItems="center" mb={2}>
        <Grid item>
          <TextField
            inputRef={nameFilterInputRef}
            label="Name Filter"
            variant="outlined"
            onChange={onChange}
            name="name"
            value={filtersValues?.name}
          />
        </Grid>
        <Grid item>
          <TextField
            inputRef={statusFilterInputRef}
            label="Status Filter"
            variant="outlined"
            onChange={onChange}
            name="status"
            value={filtersValues?.status}
          />
        </Grid>
        <Grid item>
          <TextField
            inputRef={speciesFilterInputRef}
            label="Species Filter"
            variant="outlined"
            onChange={onChange}
            name="species"
            value={filtersValues?.species}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center" mb={3}>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={onApplyFiltersClick}
            type="submit"
            size="small"
            disabled={buttonsDisabled}
            endIcon={isFetching ? <CircularProgress size={20} /> : null}>
            Apply Filters
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={onClearFiltersClick}
            size="small"
            disabled={buttonsDisabled}>
            Clear Filters
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

import { Grid, TextField, Button, Box } from "@mui/material";

interface FiltersProps {
  nameFilterInputRef: React.RefObject<HTMLInputElement>;
  speciesFilterInputRef: React.RefObject<HTMLInputElement>;
  onApplyFiltersClick: () => void;
  onClearFiltersClick: () => void;
  disabled?: boolean;
}

export const Filters = ({
  nameFilterInputRef,
  speciesFilterInputRef,
  onApplyFiltersClick,
  onClearFiltersClick,
  disabled,
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
          />
        </Grid>
        <Grid item>
          <TextField
            inputRef={speciesFilterInputRef}
            label="Species Filter"
            variant="outlined"
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
            disabled={disabled}
          >
            Apply Filters
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={onClearFiltersClick}
            size="small"
            disabled={disabled}
          >
            Clear Filters
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

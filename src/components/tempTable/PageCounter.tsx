interface PageCounterProps {
  currentPage: number;
  totalPages: number;
  isError?: boolean;
}

export const PageCounter = ({ currentPage, totalPages, isError = false }: PageCounterProps): JSX.Element => {
  return (
    <>
      Page {isError ? 0 : currentPage} of {isError ? 0 : totalPages}
    </>
  );
};

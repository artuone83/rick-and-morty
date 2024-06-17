interface PageCounterProps {
  currentPage: number;
  totalPages: number;
}

export const PageCounter = ({ currentPage, totalPages }: PageCounterProps): JSX.Element => {
  return (
    <>
      Page {currentPage} of {totalPages}
    </>
  );
};

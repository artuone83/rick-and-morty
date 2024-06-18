import { render } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage', () => {
  it('should render nothing when error is null', () => {
    const { container } = render(<ErrorMessage error={null} status="pending" />);

    expect(container.innerHTML).toBe('');
  });

  it('should render error message when error is provided', () => {
    const error = new Error('Something went wrong');
    const { getByText } = render(<ErrorMessage error={error} status="error" />);
    expect(getByText('ERROR: Failed to fetch characters')).toBeInTheDocument();
    expect(getByText(error.message)).toBeInTheDocument();
  });
});

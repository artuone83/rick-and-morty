import { QueryClient, QueryClientProvider as QueryProvider } from '@tanstack/react-query';
import { PropsWithRequiredChildren } from '../types/types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 2000,
    },
  },
});

export const QueryClientProvider = ({ children }: PropsWithRequiredChildren): JSX.Element => {
  return <QueryProvider client={queryClient}>{children}</QueryProvider>;
};

import {
  QueryClient,
  QueryClientProvider as QueryProvider,
} from "@tanstack/react-query";
import { PropsWithRequiredChildren } from "../types/types";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Retry queries once by default
      retryDelay: 2000, // Wait 2 seconds before retrying
    },
  },
});

export const QueryClientProvider = ({
  children,
}: PropsWithRequiredChildren): JSX.Element => {
  return <QueryProvider client={queryClient}>{children}</QueryProvider>;
};

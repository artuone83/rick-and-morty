import {
  QueryClient,
  QueryClientProvider as QueryProvider,
} from "@tanstack/react-query";
import { PropsWithRequiredChildren } from "../types/PropsWithRequiredChildren";

const queryClient = new QueryClient();

export const QueryClientProvider = ({
  children,
}: PropsWithRequiredChildren): JSX.Element => {
  return <QueryProvider client={queryClient}>{children}</QueryProvider>;
};

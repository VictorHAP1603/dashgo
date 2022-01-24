import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

import { theme } from "../styles/theme";
import { SidebarContextProvider } from "../context/SidebarContext";
import { makeServer } from "../services/miraje";
import { queryClient } from "../services/queryCliente";

if (process.env.NODE_ENV === "development") {
  makeServer();
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarContextProvider>
          <Component {...pageProps} />
        </SidebarContextProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>

  );
}

export default MyApp;

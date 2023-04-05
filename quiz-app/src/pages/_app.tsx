import '@/styles/globals.css';
import UseAppStores from '@/utils/UseAppStore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  const theme = UseAppStores(state => state.theme)
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (<ThemeProvider theme={theme ? darkTheme : lightTheme} >
    <Component {...pageProps} />
  </ThemeProvider>)
}

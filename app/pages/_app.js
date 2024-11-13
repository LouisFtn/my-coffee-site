import '@/styles/globals.css';
import '@/styles/searchBar.css';
import { ContextProvider } from '../components/UserContext';
import { ThemeProvider, useTheme } from '../components/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <ThemeProvider>
        <PageWrapper Component={Component} pageProps={pageProps} />
      </ThemeProvider>
    </ContextProvider>
  );
}

function PageWrapper({ Component, pageProps }) {
  const { theme } = useTheme(); 

  return (
    <div className={theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-100'}>
      <Component {...pageProps} />
    </div>
  );
}

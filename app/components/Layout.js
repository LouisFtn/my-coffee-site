import Head from 'next/head'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { useTheme } from '../components/ThemeContext';

export default function Layout({
  children,
  title,
  description
}){
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>{`Webtech ${title ? `- ${title}` : ''}`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${theme === 'dark' ? 'dark' : ''}`}>
        <Header />
        <main className={`py-10 min-h-screen max-w-full md:max-w-7xl md:mx-auto ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

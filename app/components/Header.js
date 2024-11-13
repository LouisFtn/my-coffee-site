import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../components/ThemeContext';

export default function Header() {
  const { theme } = useTheme();

  return (
    <div className={`sticky top-0 px-10 py-3 z-50 shadow-md ${theme === 'dark' ? 'bg-black' : 'bg-dark-brown'}`}>
      <header className="flex justify-between items-center">
        {/* Logo et Home link */}
        <Link href={`/`} className="flex items-center">
          <Image src="/kpop.svg" className='cursor-pointer h-8 mr-3' alt="Logo" width={30} height={30} />
          <span className={`font-semibold text-lg hover:text-green-400 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            Premium Cafe
          </span>
        </Link>
        
        {/* Navigation principale */}
        <ul className="flex gap-6">
          <li className={`${theme === 'dark' ? 'text-white' : 'text-white'} hover:text-green-400`}>
            <Link href="/">Home</Link> {/* Link vers la page d'accueil */}
          </li>
          <li className={`${theme === 'dark' ? 'text-white' : 'text-white'} hover:text-green-400`}>
            <Link href="/about">Histoire</Link> {/* Link vers la page "Histoire" */}
          </li>
          <li className={`${theme === 'dark' ? 'text-white' : 'text-white'} hover:text-green-400`}>
            <Link href="/products">Nos produits</Link> {/* Link vers la page "Nos produits" */}
          </li>
        </ul>
      </header>
    </div>
  );
}

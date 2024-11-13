import Link from 'next/link';
import Layout from '../components/Layout';
import { useContext, useEffect, useState } from 'react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useTheme } from '../components/ThemeContext';

export default function Page() {
  const [profile, setProfile] = useState(null);
  const user = useUser();
  const supabase = useSupabaseClient();
  const { theme } = useTheme();

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Erreur lors de la récupération du profil:', error);
        } else {
          setProfile(data);
        }
      }
    };

    fetchProfile();
  }, [user, supabase]);

  return (
    <Layout title="Café XYZ" description="Découvrez notre entreprise et nos produits artisanaux">
    <div className="relative w-full h-80 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-white text-6xl font-bold">Café XYZ</h1>
      </div>
    </div>
    <div className="min-h-screen flex flex-col bg-gray-900">
      <main className={`p-4 flex-grow ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
        {profile && (
          <div className="mb-4">
            <p className="text-lg font-semibold text-white">
              Bienvenue {profile.username}
            </p>
          </div>
        )}
  
        <section className="w-full">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Nos produits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 shadow p-4 rounded">
              <h3 className="text-xl font-bold text-white">Café Arabica</h3>
              <p className="text-white">
                Découvrez notre café Arabica de qualité supérieure, récolté à la main dans les montagnes colombiennes.
              </p>
            </div>
            <div className="bg-gray-800 shadow p-4 rounded">
              <h3 className="text-xl font-bold text-white">Café Robusta</h3>
              <p className="text-white">
                Un café robuste avec un goût corsé, idéal pour les amateurs de saveurs intenses.
              </p>
            </div>
          </div>
        </section>
      </main>
  
      <aside className="bg-gray-800 p-4 shadow rounded">
        <h2 className="text-2xl font-bold mb-4 text-white">Navigation</h2>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/products">
              <div className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition duration-300">
                Nos produits
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-700 transition duration-300">
                À propos de nous
              </div>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  </Layout>
  
  );
}

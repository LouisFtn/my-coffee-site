import { createContext, useState, useEffect } from 'react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

const Context = createContext();

export default Context;

export const ContextProvider = ({ children }) => {
  const supabase = useSupabaseClient();
  const supabaseUser = useUser();
  const [user, setUser] = useState();

  useEffect(() => {
    if (supabaseUser) setUser(supabaseUser);
  }, [supabaseUser]);

  const login = async () => {
    try {
      const { user, error } = await supabase.auth.signIn({
        provider: 'github',
      });
      if (error) throw error;
      setUser(user);
    } catch (error) {
      console.error('Connexion Error:', error.message);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <Context.Provider
      value={{
        user: user,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

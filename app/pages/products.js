// pages/products.js
import Layout from '../components/Layout';
import { useTheme } from '../components/ThemeContext';

export default function Products() {
  const { theme } = useTheme();

  const products = [
    {
      name: 'Café Arabica',
      description: 'Café doux et raffiné, idéal pour les amateurs de saveurs subtiles.',
      price: '10€',
    },
    {
      name: 'Café Robusta',
      description: 'Café puissant et corsé, parfait pour les amateurs de café fort.',
      price: '8€',
    },
    {
      name: 'Café Déca',
      description: 'Café décaféiné, idéal pour ceux qui aiment le goût du café sans la caféine.',
      price: '12€',
    },
  ];

  return (
    <Layout title="Nos produits" description="Découvrez nos cafés artisanaux">
      <div className={`p-4 ${theme === 'dark' ? 'text-white bg-black' : 'text-white bg-dark-brown'}`}>
        <h1 className="text-4xl font-bold mb-8">Nos produits</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-800 shadow-lg p-6 rounded-lg border border-brown-500">
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <p className="mt-2">{product.description}</p>
              <p className="font-semibold mt-4">Prix : {product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

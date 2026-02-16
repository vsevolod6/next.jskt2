import Link from 'next/link';
import { getCountryById } from '../../../data/countries';
import { notFound } from 'next/navigation';

export default function CountryPage({ params }) {
  const country = getCountryById(params.id);
  
  if (!country) {
    notFound();
  }

  const formatNumber = (num) => {
    return num.toLocaleString('ru-RU');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Link 
        href="/"
        style={{
          color: '#0066cc',
          textDecoration: 'none',
          marginBottom: '20px',
          display: 'inline-block'
        }}
      >
        ← Назад к списку стран
      </Link>
      
      <h1>{country.name}</h1>
      
      <div style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <h2>Описание страны:</h2>
        <div style={{ lineHeight: '1.6' }}>
          <p><strong>Язык:</strong> {country.language}</p>
          <p><strong>Площадь:</strong> {formatNumber(country.area)} км²</p>
          <p><strong>Население:</strong> {formatNumber(country.population)} человек</p>
        </div>
      </div>

      <h2>Города страны:</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {country.cities.map((city) => (
          <li key={city.id} style={{ marginBottom: '10px' }}>
            <Link 
              href={`/countries/${country.id}/cities/${city.id}`}
              style={{
                textDecoration: 'none',
                color: '#0066cc',
                fontSize: '16px',
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                display: 'inline-block',
                transition: 'background-color 0.2s'
              }}
            >
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

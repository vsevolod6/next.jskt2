import Link from 'next/link';
import { getCountryById, getCityById } from '../../../../../data/countries';
import { notFound } from 'next/navigation';

export default function CityPage({ params }) {
  const country = getCountryById(params.id);
  const city = getCityById(params.id, params.cityId);
  
  if (!country || !city) {
    notFound();
  }

  const formatNumber = (num) => {
    return num.toLocaleString('ru-RU');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Link 
        href={`/countries/${params.id}`}
        style={{
          color: '#0066cc',
          textDecoration: 'none',
          marginBottom: '20px',
          display: 'inline-block'
        }}
      >
        ← Назад к стране {country.name}
      </Link>
      
      <h1>{city.name}</h1>
      
      <div style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <h2>Описание города:</h2>
        <div style={{ lineHeight: '1.6' }}>
          <p><strong>Площадь:</strong> {formatNumber(city.area)} км²</p>
          <p><strong>Население:</strong> {formatNumber(city.population)} человек</p>
          <p><strong>Год основания:</strong> {city.founded} год</p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <Link 
          href={`/countries/${params.id}`}
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#0066cc',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        >
          Перейти к странице страны {country.name}
        </Link>
      </div>
    </div>
  );
}

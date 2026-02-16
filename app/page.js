import Link from 'next/link';
import { countries } from '../data/countries';

export default function HomePage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Страны и города мира</h1>
      <h2>Список стран:</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {countries.map((country) => (
          <li key={country.id} style={{ marginBottom: '10px' }}>
            <Link 
              href={`/countries/${country.id}`}
              style={{
                textDecoration: 'none',
                color: '#0066cc',
                fontSize: '18px',
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                display: 'inline-block',
                transition: 'background-color 0.2s'
              }}
            >
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

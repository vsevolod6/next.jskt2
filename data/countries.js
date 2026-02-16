export const countries = [
  {
    id: 'russia',
    name: 'Россия',
    language: 'Русский',
    area: 17098246, // км²
    population: 146748000,
    cities: [
      {
        id: 'moscow',
        name: 'Москва',
        area: 2511, // км²
        population: 12678000,
        founded: 1147
      },
      {
        id: 'saint-petersburg',
        name: 'Санкт-Петербург',
        area: 1439, // км²
        population: 5602000,
        founded: 1703
      },
      {
        id: 'novosibirsk',
        name: 'Новосибирск',
        area: 506, // км²
        population: 1620000,
        founded: 1893
      }
    ]
  },
  {
    id: 'usa',
    name: 'США',
    language: 'Английский',
    area: 9833520, // км²
    population: 331900000,
    cities: [
      {
        id: 'new-york',
        name: 'Нью-Йорк',
        area: 1214, // км²
        population: 8336000,
        founded: 1624
      },
      {
        id: 'los-angeles',
        name: 'Лос-Анджелес',
        area: 1302, // км²
        population: 3980000,
        founded: 1781
      },
      {
        id: 'chicago',
        name: 'Чикаго',
        area: 606, // км²
        population: 2716000,
        founded: 1833
      }
    ]
  },
  {
    id: 'france',
    name: 'Франция',
    language: 'Французский',
    area: 643801, // км²
    population: 67400000,
    cities: [
      {
        id: 'paris',
        name: 'Париж',
        area: 105, // км²
        population: 2161000,
        founded: 259
      },
      {
        id: 'marseille',
        name: 'Марсель',
        area: 241, // км²
        population: 870000,
        founded: 600
      },
      {
        id: 'lyon',
        name: 'Лион',
        area: 48, // км²
        population: 516000,
        founded: 43
      }
    ]
  },
  {
    id: 'japan',
    name: 'Япония',
    language: 'Японский',
    area: 377975, // км²
    population: 125700000,
    cities: [
      {
        id: 'tokyo',
        name: 'Токио',
        area: 2194, // км²
        population: 37400000,
        founded: 1457
      },
      {
        id: 'osaka',
        name: 'Осака',
        area: 225, // км²
        population: 2690000,
        founded: 643
      },
      {
        id: 'kyoto',
        name: 'Киото',
        area: 828, // км²
        population: 1475000,
        founded: 794
      }
    ]
  },
  {
    id: 'germany',
    name: 'Германия',
    language: 'Немецкий',
    area: 357386, // км²
    population: 83200000,
    cities: [
      {
        id: 'berlin',
        name: 'Берлин',
        area: 892, // км²
        population: 3669000,
        founded: 1237
      },
      {
        id: 'munich',
        name: 'Мюнхен',
        area: 311, // км²
        population: 1488000,
        founded: 1158
      },
      {
        id: 'hamburg',
        name: 'Гамбург',
        area: 755, // км²
        population: 1900000,
        founded: 808
      }
    ]
  }
];

// Вспомогательные функции для поиска
export const getCountryById = (id) => {
  return countries.find(country => country.id === id);
};

export const getCityById = (countryId, cityId) => {
  const country = getCountryById(countryId);
  if (country) {
    return country.cities.find(city => city.id === cityId);
  }
  return null;
};

export const getAllCities = () => {
  const allCities = [];
  countries.forEach(country => {
    country.cities.forEach(city => {
      allCities.push({
        ...city,
        countryId: country.id,
        countryName: country.name
      });
    });
  });
  return allCities;
};

import { useState, useEffect } from "react";

const API = process.env.NEXT_PUBLIC_API;

interface Country {
  id: number;
  title: string;
}

interface City {
  id: number;
  title: string;
  country_id: number;
}

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${API}/main/locations/countries`);
        if (!response.ok) throw new Error("Failed to fetch countries");
        const data = await response.json();
        setCountries(data.data.countries);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};

export const useAllCities = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllCities = async () => {
      try {
        const countriesRes = await fetch(`${API}/main/locations/countries`);
        if (!countriesRes.ok) throw new Error("Failed to fetch countries");
        const countriesData = await countriesRes.json();
        const countries = countriesData.data.countries;

        const allCities: City[] = [];
        for (const country of countries) {
          const provincesRes = await fetch(`${API}/main/locations/provinces`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ countryID: country.id }),
          });

          if (!provincesRes.ok) continue;
          const provincesData = await provincesRes.json();

          for (const province of provincesData.data) {
            const citiesRes = await fetch(`${API}/main/locations/cities`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ provinceID: province.id }),
            });

            if (!citiesRes.ok) continue;
            const citiesData = await citiesRes.json();

            allCities.push(
              ...citiesData.data.map((city: City) => ({
                ...city,
                country_id: country.id,
              }))
            );
          }
        }

        setCities(allCities);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchAllCities();
  }, []);

  return { cities, loading, error };
};

export const useLocations = () => {
  const { countries } = useCountries();
  const { cities, loading, error } = useAllCities();

  const locations = cities.map((city) => {
    const country = countries.find((c) => c.id === city.country_id);
    return {
      city: city.title,
      country: country?.title || "Unknown",
      fullName: `${city.title}, ${country?.title || ""}`,
    };
  });

  return { locations, loading, error };
};

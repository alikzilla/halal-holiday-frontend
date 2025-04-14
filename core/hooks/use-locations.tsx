import { useState, useEffect } from "react";

const API = process.env.NEXT_PUBLIC_API;

export interface Country {
  id: number;
  oid: number;
  title: string;
  is_top: 0 | 1;
}

export interface Province {
  id: number;
  title: string;
}

export interface City {
  id: number;
  title: string;
}

export interface Region {
  id: number;
  title: string;
}

export interface CityWithCountry extends City {
  countryId?: number;
  countryName?: string;
}

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${API}/main/locations/countries`);
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
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

export const useProvinces = ({ countryId }: { countryId: number }) => {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${API}/main/locations/provinces`, {
          method: "POST",
          body: JSON.stringify(countryId),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        setProvinces(data.data.provinces);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [countryId]);

  return { provinces, loading, error };
};

export const useCities = ({ provinceID }: { provinceID: number }) => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      const province = {
        provinceID: provinceID,
      };

      try {
        const response = await fetch(`${API}/main/locations/cities`, {
          method: "POST",
          body: JSON.stringify(province),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        setCities(data.data.cities);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, [provinceID]);

  return { cities, loading, error };
};

export const useRegions = ({ cityId }: { cityId: number }) => {
  const [regions, setRegions] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${API}/main/locations/regions`, {
          method: "POST",
          body: JSON.stringify(cityId),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        setRegions(data.data.cities);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [cityId]);

  return { regions, loading, error };
};

export const useAllLocations = () => {
  const [locations, setLocations] = useState<{
    countries: Country[];
    cities: City[];
  }>({ countries: [], cities: [] });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllLocations = async () => {
      try {
        setLoading(true);

        // 1. Fetch all countries
        const countriesResponse = await fetch(
          `${API}/main/locations/countries`
        );
        if (!countriesResponse.ok) {
          throw new Error("Failed to fetch countries");
        }
        const countriesData = await countriesResponse.json();
        const countries = countriesData.data.countries;

        // 2. Fetch provinces for all countries
        const provincesPromises = countries.map(async (country: Country) => {
          const response = await fetch(`${API}/main/locations/provinces`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ countryID: country.id }),
          });
          if (!response.ok) {
            throw new Error(
              `Failed to fetch provinces for country ${country.id}`
            );
          }
          const data = await response.json();
          return data.data.provinces;
        });

        const provincesResults = await Promise.all(provincesPromises);
        const provinces = provincesResults.flat();

        // 3. Fetch cities for all provinces
        const citiesPromises = provinces.map(async (province: Province) => {
          const response = await fetch(`${API}/main/locations/cities`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ provinceID: province.id }),
          });
          if (!response.ok) {
            throw new Error(
              `Failed to fetch cities for province ${province.id}`
            );
          }
          const data = await response.json();
          return data.data.cities;
        });

        const citiesResults = await Promise.all(citiesPromises);
        const cities = citiesResults.flat();

        setLocations({
          countries,
          cities,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchAllLocations();
  }, []);

  return { ...locations, loading, error };
};

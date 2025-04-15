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
    cities: (City & {
      countryId: number;
      countryName: string;
      provinceId: number;
      provinceName: string;
    })[];
  }>({ countries: [], cities: [] });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllLocations = async () => {
      try {
        setLoading(true);
        setError(null);

        // 1. Fetch all countries
        const countriesResponse = await fetch(
          `${API}/main/locations/countries`
        );
        if (!countriesResponse.ok) throw new Error("Failed to fetch countries");
        const countriesData = await countriesResponse.json();
        const countries = countriesData.data?.countries || [];

        if (!countries.length) throw new Error("No countries found");

        // 2. Fetch provinces for all countries (with country info)
        const provincesData = await Promise.all(
          countries.map(async (country: Country) => {
            const response = await fetch(`${API}/main/locations/provinces`, {
              method: "POST",
              body: JSON.stringify({ countryID: country.id }),
            });
            if (!response.ok) {
              console.warn(`Failed provinces for country ${country.id}`);
              return [];
            }
            const data = await response.json();
            return (
              data.data?.provinces?.map((province: Province) => ({
                ...province,
                countryId: country.id,
                countryName: country.title,
              })) || []
            );
          })
        );
        const provinces = provincesData.flat();

        // 3. Fetch cities for all provinces (with full context)
        const citiesData = await Promise.all(
          provinces.map(
            async (
              province: Province & {
                countryId: number;
                countryName: string;
              }
            ) => {
              const response = await fetch(`${API}/main/locations/cities`, {
                method: "POST",
                body: JSON.stringify({ provinceID: province.id }),
              });
              if (!response.ok) {
                console.warn(`Failed cities for province ${province.id}`);
                return [];
              }
              const data = await response.json();
              return (
                data.data?.cities?.map((city: City) => ({
                  ...city,
                  countryId: province.countryId,
                  countryName: province.countryName,
                  provinceId: province.id,
                  provinceName: province.title,
                })) || []
              );
            }
          )
        );
        const cities = citiesData.flat();

        setLocations({ countries, cities });
      } catch (err) {
        console.error("Fetch locations error:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchAllLocations();
  }, []);

  return { ...locations, loading, error };
};

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

export const useProvinces = (countryId: number) => {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch(`${API}/main/locations/provinces`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ countryID: countryId }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch provinces");
        }

        const data = await response.json();
        setProvinces(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    if (countryId) {
      fetchProvinces();
    }
  }, [countryId]);

  return { provinces, loading, error };
};

export const useCities = (provinceId: number) => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(`${API}/main/locations/cities`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ provinceID: provinceId }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch cities");
        }

        const data = await response.json();
        setCities(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    if (provinceId) {
      fetchCities();
    } else {
      setCities([]);
      setLoading(false);
      setError(null);
    }
  }, [provinceId]);

  return { cities, loading, error };
};

export const useRegions = (cityId: number) => {
  const [regions, setRegions] = useState<Region[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch(`${API}/main/locations/regions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cityID: cityId }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch regions");
        }

        const data = await response.json();
        setRegions(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    if (cityId) {
      fetchRegions();
    } else {
      setRegions([]);
      setLoading(false);
      setError(null);
    }
  }, [cityId]);

  return { regions, loading, error };
};

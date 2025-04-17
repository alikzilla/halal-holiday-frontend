import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { IHotel } from "@/core/types/hotels";
import { HotelProperty, HotelSearchResponse } from "../types/hotel";

export const useHotelsSearch = () => {
  const [hotels, setHotels] = useState<IHotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true);
        setError(null);

        const cityId = searchParams.get("cityId");
        const checkIn = searchParams.get("checkIn");
        const checkOut = searchParams.get("checkOut");
        const adults = searchParams.get("adults");
        const children = searchParams.get("children");
        const infants = searchParams.get("infants");
        const pets = searchParams.get("pets");

        if (!cityId || !checkIn || !checkOut || !adults) {
          throw new Error("Missing required search parameters");
        }

        const requestBody = {
          type: "city",
          ID: cityId,
          checkin: checkIn,
          checkout: checkOut,
          adults: [parseInt(adults)],
          childs: [parseInt(children || "0")],
        };

        const response = await fetch(
          "https://halalholidaycheck.com/api/main/search",
          {
            method: "POST",
            body: JSON.stringify(requestBody),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.data && data.data.properties) {
          setHotels(data.data.properties);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        console.error("Error fetching hotels:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [searchParams]);

  return { hotels, loading, error };
};

export const useHotelSearch = (): HotelSearchResponse => {
  const [hotel, setHotel] = useState<HotelProperty>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        setLoading(true);
        setError(null);

        const hotelId = searchParams.get("id");
        const checkIn = searchParams.get("checkIn");
        const checkOut = searchParams.get("checkOut");
        const adults = searchParams.get("adults");
        const children = searchParams.get("children");
        const chage = searchParams.get("chage");

        if (!hotelId || !checkIn || !checkOut || !adults) {
          throw new Error("Missing required search parameters");
        }

        const requestBody = {
          type: "hotel",
          ID: hotelId,
          checkin: "2025-06-10",
          checkout: "2025-06-15",
          adults: [2],
          childs: [1],
          chage1: [8],
        };

        const response = await fetch(
          "https://halalholidaycheck.com/api/main/search",
          {
            method: "POST",
            body: JSON.stringify(requestBody),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.data && data.data) {
          setHotel(data.data);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        console.error("Error fetching hotel:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [searchParams]);

  return { hotel, loading, error };
};

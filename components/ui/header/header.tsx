"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "../link/link";
import Button from "../button/button";
import { Container } from "@/components/common";

const Header = ({ isTransparent = false }: { isTransparent?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedLanguage, setSelectedLanguage] = useState("En");

  const currencies = ["EUR", "TRY", "RUB", "GBP", "USD"];
  const languages = ["Ru", "En", "Tu", "Fr", "De", "Du", "العربية"];

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { title: "Hotel", href: "/hotel" },
    { title: "Flights", href: "/flights" },
    { title: "Rent a Car", href: "/rent-car" },
    { title: "Tour", href: "/tour" },
    { title: "Transfer", href: "/transfer" },
    { title: "Activity", href: "/activity" },
  ];

  return (
    <header
      className={cn(
        isTransparent ? "bg-transparent" : "bg-[var(--primary)]",
        isScrolled && isTransparent && "bg-[var(--primary)]",
        "w-full h-[80px] flex items-center fixed top-0 z-50 transition-all duration-300"
      )}
    >
      <Container>
        <section className="w-full h-full flex items-center justify-between">
          <nav className="flex items-center gap-5 relative">
            <Link href="/" className="p-0">
              <Image src="/logo.svg" alt="logo" width={200} height={60} />
            </Link>
            {links.map((link, index) => (
              <Link href={link.href} key={index} className="relative">
                {link.title}
                {activeLink === link.href && (
                  <div className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-white transition-all duration-300"></div>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            {/* Currency Dropdown */}
            <div className="relative">
              <Button
                type="transparent"
                onClick={() => {
                  setIsCurrencyOpen(!isCurrencyOpen);
                  setIsLanguageOpen(false);
                }}
                className="flex items-center gap-2"
              >
                <Image
                  src={`/assets/icons/currency-${selectedCurrency.toLowerCase()}-white.svg`}
                  alt={selectedCurrency}
                  width={20}
                  height={20}
                />
                <span className="text-white">{selectedCurrency}</span>
              </Button>
              {isCurrencyOpen && (
                <div className="absolute top-14 right-0 bg-white shadow-lg rounded-lg w-40 z-50">
                  {currencies.map((currency, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedCurrency(currency);
                        setIsCurrencyOpen(false);
                      }}
                      className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    >
                      <Image
                        src={`/assets/icons/currency-${currency.toLowerCase()}.svg`}
                        alt={currency}
                        width={20}
                        height={20}
                      />
                      <span>{currency}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Language Dropdown */}
            <div className="relative">
              <Button
                type="transparent"
                onClick={() => {
                  setIsLanguageOpen(!isLanguageOpen);
                  setIsCurrencyOpen(false);
                }}
                className="flex items-center gap-2"
              >
                <Image
                  src={`/assets/flags/${selectedLanguage.toLowerCase()}.svg`}
                  alt="language"
                  width={20}
                  height={20}
                />
                <span className="text-white">{selectedLanguage}</span>
              </Button>
              {isLanguageOpen && (
                <div className="absolute top-14 right-0 bg-white shadow-lg rounded-lg w-40 z-50">
                  {languages.map((language, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedLanguage(language);
                        setIsLanguageOpen(false);
                      }}
                      className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    >
                      <Image
                        src={`/assets/flags/${language.toLowerCase()}.svg`}
                        alt={language}
                        width={20}
                        height={20}
                      />
                      <span>{language}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Button type="gradient" leadingIcon={true} leading="star">
              Be a platinum
            </Button>
            <Button type="secondary">Login</Button>
            <Image
              src="/assets/icons/hamburger-white.svg"
              alt="hamburger"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </section>
      </Container>
    </header>
  );
};

export default Header;

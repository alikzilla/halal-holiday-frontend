"use client";

import { useEffect, useState } from "react";
import { cn } from "@/core/lib/utils";
import Image from "next/image";
import { Link, Button } from "@/components/ui";
import { Container } from "@/components/common";
import { usePathname } from "next/navigation";

const Header = ({ isTransparent = false }: { isTransparent?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedLanguage, setSelectedLanguage] = useState("En");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const pathname = usePathname();

  const currencies = ["EUR", "TRY", "RUB", "GBP", "USD"];
  const languages = ["Ru", "En", "Tu", "Fr", "De", "Du", "العربية"];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    // Set initial width
    setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
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

  const isLinkActive = (href: string) => {
    return pathname?.startsWith(href);
  };

  return (
    <header
      className={cn(
        isTransparent ? "bg-transparent" : "bg-[var(--primary)]",
        isScrolled && isTransparent && "bg-[var(--primary)]",
        isMobileMenuOpen && "bg-[var(--primary)]",
        "w-full h-[80px] flex items-center fixed top-0 z-50 transition-all duration-300"
      )}
    >
      <Container>
        <section className="w-full h-full flex items-center justify-between">
          <nav className="flex items-center gap-5 relative">
            <Link href="/" className="p-0">
              <Image
                src="/logo.svg"
                alt="logo"
                width={windowWidth < 640 ? 120 : 200}
                height={60}
              />
            </Link>

            {/* Desktop Navigation */}
            {windowWidth > 1024 && (
              <>
                {links.map((link, index) => (
                  <Link href={link.href} key={index} className="relative group">
                    {link.title}
                    {isLinkActive(link.href) && (
                      <div className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-white transition-all duration-300"></div>
                    )}
                  </Link>
                ))}
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          {windowWidth <= 1024 && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              <Image
                src={
                  isMobileMenuOpen
                    ? "/assets/icons/hamburger-white.svg"
                    : "/assets/icons/hamburger-white.svg"
                }
                alt="menu"
                width={24}
                height={24}
              />
            </button>
          )}

          {/* Desktop Actions */}
          {windowWidth > 1024 && (
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
            </div>
          )}
        </section>

        {/* Mobile Menu */}
        {isMobileMenuOpen && windowWidth <= 1024 && (
          <div className="lg:hidden absolute top-[80px] left-0  w-full bg-[var(--primary)] shadow-lg z-40">
            <div className="p-4 border-t border-white/10">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col gap-4 mb-4">
                {links.map((link, index) => (
                  <Link
                    href={link.href}
                    key={index}
                    className="text-white py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                    {isLinkActive(link.href) && (
                      <div className="w-full h-[2px] bg-white mt-1 transition-all duration-300"></div>
                    )}
                  </Link>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="flex flex-col gap-3">
                {/* Currency Dropdown */}
                <div className="relative">
                  <Button
                    type="transparent"
                    onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                    className="flex items-center gap-2 w-full justify-start"
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
                    <div className="bg-white/10 backdrop-blur-md rounded-lg w-full mt-1">
                      {currencies.map((currency, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedCurrency(currency);
                            setIsCurrencyOpen(false);
                          }}
                          className="p-3 rounded-lg hover:bg-white/20 cursor-pointer flex items-center gap-2 text-white"
                        >
                          <Image
                            src={`/assets/icons/currency-${currency.toLowerCase()}-white.svg`}
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
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="flex items-center gap-2 w-full justify-start"
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
                    <div className="bg-white/10 backdrop-blur-md rounded-lg w-full mt-1">
                      {languages.map((language, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedLanguage(language);
                            setIsLanguageOpen(false);
                          }}
                          className="p-3 rounded-lg hover:bg-white/20 cursor-pointer flex items-center gap-2 text-white"
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

                <Button
                  type="gradient"
                  leadingIcon={true}
                  leading="star"
                  className="w-full"
                >
                  Be a platinum
                </Button>
                <Button type="secondary" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;

"use client"

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "../link/link";
import Button from "../button/button";
import { Container } from "@/components/common";
import { useEffect, useState } from "react";

const Header = ({ isTransparent = false }: { isTransparent?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        isScrolled && isTransparent && "backdrop-blur-lg",
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
              <Link href={link.href} key={index}>
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <Button type="gradient" leadingIcon={true} leading="star">
              Be a platinum
            </Button>
            <Button type="secondary">Login</Button>
            <Image
              src="/assets/icons/hamburger.svg"
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

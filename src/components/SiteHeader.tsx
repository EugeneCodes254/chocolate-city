"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, CalendarDays } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="site-header site-header-inner">
      <Link
        href="/"
        className="brand"
        aria-label="Chocolate City home"
        onClick={closeMenu}
      >
        <span className="brand-logo-wrap brand-logo-transparent">
          <Image
            src="/chocolate-city-logo-transparent.png"
            alt="Chocolate City official logo"
            className="brand-logo-image"
            width={890}
            height={222}
            priority
          />
        </span>
      </Link>

      <button
        type="button"
        className="mobile-toggle"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="primary-navigation"
      >
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>

      <nav
        id="primary-navigation"
        className={`main-nav ${open ? "nav-open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}

        <Link
          href="/reservations"
          className="nav-cta"
          onClick={closeMenu}
        >
          <span>Reserve a table</span>
          <CalendarDays size={15} aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}

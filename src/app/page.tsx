"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  MapPin,
} from "lucide-react";

const menuItems = [
  {
    number: "01",
    title: "The Dining Experience",
    category: "FOOD & DINING",
    image: "/images/restaurant/restaurant-photo-04.jpg",
    video: "/videos/dining-experience.mp4",
    description: "Good food, thoughtful details and moments worth sharing.",
    href: "/menu",
  },
  {
    number: "02",
    title: "Drinks & Good Company",
    category: "BAR & LOUNGE",
    image: "/images/restaurant/restaurant-photo-09.jpg",
    video: "/videos/drinks-lounge.mp4",
    description: "Settle in, raise a glass and enjoy the atmosphere.",
    href: "/menu",
  },
  {
    number: "03",
    title: "Your Next Celebration",
    category: "EVENTS & EXPERIENCES",
    image: "/images/restaurant/restaurant-photo-16.jpg",
    video: null,
    description: "Bring people together for the moments that matter.",
    href: "/events",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a
          href="#home"
          className="brand"
          aria-label="Chocolate City home"
          onClick={closeMenu}
        >
            <Image
              src="/chocolate-city-logo-transparent.png"
              alt="Chocolate City"
              width={220}
              height={90}
              priority
              className="floating-brand-logo"
            />
          </a>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#story" onClick={closeMenu}>Our Story</a>
          <a href="/menu" onClick={closeMenu}>Dining</a>
          <a href="/events" onClick={closeMenu}>Experiences</a>
          <a href="/locations" onClick={closeMenu}>Locations</a>
          <a
            href="#contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Get in touch <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <motion.p
            className="eyebrow hero-eyebrow"
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ duration: 0.7 }}
          >
            A PLACE FOR EVERY OCCASION
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            Good Food.
            <br />
            Great Company.
            <br />
            <em>Unforgettable</em>
            <br />
            Moments.
          </motion.h1>

          <motion.p
            className="hero-description"
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ duration: 0.8, delay: 0.24 }}
          >
            A place to dine, unwind and celebrate — crafted for the
            moments that bring people together.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ duration: 0.8, delay: 0.36 }}
          >
            <a className="button button-light" href="/menu">
              Explore Our Menu <ArrowRight size={17} />
            </a>
            <a className="text-link light-link" href="/reservations">
              Make a Reservation
            </a>
          </motion.div>
        </div>

        <div className="hero-bottom">
          <span>GOOD TASTE. GREAT COMPANY.</span>
          <a href="#story" aria-label="Scroll to our story">
            <ArrowDown size={18} />
          </a>
          <span>CHOCOLATE CITY · KENYA</span>
        </div>
      </section>

      <section className="intro section-pad" id="story">
        <motion.div
          className="intro-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">WELCOME TO CHOCOLATE CITY</span>
          <span className="intro-index">EST. IN HOSPITALITY</span>
        </motion.div>

        <motion.div
          className="intro-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2>
            The best moments
            <br />
            happen <em>together.</em>
          </h2>
          <div className="intro-copy">
            <p>
              Some places are simply part of the plan. Others become
              part of the memory. Chocolate City is about creating
              space for connection, great hospitality and moments
              that bring people back together.
            </p>
            <a className="text-link" href="#experiences">
              Get to know us <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="intro-image-wrap">
          <div className="intro-image" role="img" aria-label="Elegant restaurant dining atmosphere" />
          <div className="image-note">
            <span>01 / THE EXPERIENCE</span>
            <span>Made for moments that matter.</span>
          </div>
        </div>
      </section>

      <section className="offerings section-pad" id="menu">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A TASTE OF WHAT WE DO</span>
            <h2>Come for the food.<br /><em>Stay for the feeling.</em></h2>
          </div>
          <p>
            From relaxed dining to lively gatherings, discover
            experiences designed around good food and good company.
          </p>
        </div>

        <div className="offering-grid">
          {menuItems.map((item, index) => (
            <motion.a
              href={item.href}
              className="offering-card"
              key={item.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={reveal}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <div className="offering-image">
                {item.video ? (
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={item.image}
                    className="offering-photo"
                    aria-hidden="true"
                  />
                ) : (
                  <Image src={item.image} alt="" fill sizes="(max-width: 600px) 88vw, (max-width: 900px) 30vw, 26vw" className="offering-photo" />
                )}
                <span className="card-number">{item.number}</span>
                <span className="card-arrow">
                  <ArrowUpRight size={19} />
                </span>
              </div>
              <div className="offering-info">
                <span className="eyebrow">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
        <p className="content-note">
          Menu items, current offerings and prices will be confirmed
          with Chocolate City before launch.
        </p>
      </section>

      <section className="experience" id="experiences">
        <div className="experience-image" />
        <div className="experience-overlay" />
        <motion.div
          className="experience-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">MAKE IT AN OCCASION</span>
          <h2>
            Bring your people.
            <br />
            <em>We&apos;ll set the scene.</em>
          </h2>
          <p>
            Planning a celebration, a business gathering or a special
            get-together? Let&apos;s create an experience worth remembering.
          </p>
          <a className="button button-light" href="#contact">
            Talk to our team <ArrowRight size={17} />
          </a>
        </motion.div>
        <span className="experience-caption">GATHER · CELEBRATE · CONNECT</span>
      </section>


      <section className="immersive-gallery section-pad" aria-labelledby="gallery-heading">
        <div className="gallery-heading">
          <div className="gallery-heading-main">
            <span className="eyebrow">THE CHOCOLATE CITY EXPERIENCE</span>
            <h2 id="gallery-heading">Space to connect.<br /><em>Moments to remember.</em></h2>
          </div>
          <div className="gallery-heading-aside">
            <p>Thoughtful spaces, memorable meals and the kind of atmosphere that brings everyone together.</p>
            <a href="/events" className="gallery-text-link">Discover our experiences <ArrowRight size={15} /></a>
          </div>
        </div>

        <div className="editorial-gallery">
          <figure className="editorial-gallery-main">
            <Image src="/images/restaurant/restaurant-photo-02.jpg" alt="Chocolate City restaurant interior" fill sizes="(max-width: 900px) 100vw, 62vw" />
            <figcaption><span>01 / THE SPACE</span><strong>A place to settle in.</strong></figcaption>
          </figure>
          <div className="editorial-gallery-side">
            <figure>
              <Image src="/images/restaurant/restaurant-photo-05.jpg" alt="Chocolate City dining and bar area" fill sizes="(max-width: 900px) 100vw, 38vw" />
              <figcaption><span>02 / GOOD COMPANY</span><strong>Made for gathering.</strong></figcaption>
            </figure>
            <figure>
              <Image src="/images/restaurant/restaurant-photo-18.jpg" alt="Chocolate City venue details" fill sizes="(max-width: 900px) 100vw, 38vw" />
              <figcaption><span>03 / THE DETAILS</span><strong>Stay a little longer.</strong></figcaption>
            </figure>
          </div>
        </div>

        <div className="gallery-footer">
          <span>FOOD · DRINKS · EXPERIENCES</span>
          <a href="/menu">Explore the menu <ArrowRight size={15} /></a>
        </div>
      </section>

      <section className="locations section-pad" id="locations">
        <div className="location-copy">
          <span className="eyebrow">YOUR TABLE IS WAITING</span>
          <h2>Find your<br /><em>Chocolate City.</em></h2>
          <p>
            Find a location, explore the experience and get in touch
            with our team to plan your visit.
          </p>
          <a
            className="button button-dark"
            href="/locations"
            target="_blank"
            rel="noreferrer"
          >
            Explore our locations <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="location-visual">
          <div className="location-photo" />
          <div className="location-stamp">
            <MapPin size={20} strokeWidth={1.4} />
            <span>GOOD TIMES<br />ARE CLOSER<br />THAN YOU THINK.</span>
          </div>
        </div>
      </section>

      <section className="contact-band" id="contact">
        <span className="eyebrow">LET&apos;S MAKE IT HAPPEN</span>
        <h2>Something worth<br /><em>getting together for.</em></h2>
        <p>
          Have a question or planning an event? Reach out to the
          Chocolate City team to start the conversation.
        </p>
        <a
          className="button button-light"
          href="/contact"
        >
          Contact Chocolate City <ArrowUpRight size={17} />
        </a>
      </section>

      <footer className="site-footer">
        <a href="#home" className="footer-brand homepage-footer-brand">
          <Image
            src="/chocolate-city-logo-transparent.png"
            alt="Chocolate City"
            className="homepage-footer-logo"
            width={220}
            height={55}
          />
        </a>
        <p className="footer-message">
          Good food. Great company. Unforgettable moments.
        </p>

        <div className="footer-bottom">
          <span>© 2026 Chocolate City Kenya</span>
          <a href="#home">Back to top ↑</a>
          <span>DESIGNED FOR GOOD EXPERIENCES</span>
        </div>
      </footer>
    </main>
  );
}

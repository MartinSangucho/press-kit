import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaMusic, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#musica", label: "Música" },
  { href: "#videos", label: "Videos" },
  { href: "#estadisticas", label: "Estadísticas" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          ...styles.nav,
          ...(scrolled ? styles.navScrolled : {}),
        }}
      >
        <div style={styles.navContainer}>
          <a href="#inicio" style={styles.logo}>
            <FaMusic style={{ color: "#2563eb", marginRight: 8 }} />
            Lean_ums
          </a>

          <div style={styles.desktopMenu}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} style={styles.navLink}>
                {link.label}
              </a>
            ))}
          </div>

          <button
            style={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            style={styles.mobileMenu}
          >
            <div style={styles.mobileMenuContent}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={styles.mobileLink}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <div style={styles.socialRow}>
                <a href="https://open.spotify.com/intl-es/artist/1khHHAvDKYMWoxP6chcH6y?si=uxs84qCiRXeDn6LuMUZevA" target="_blank" rel="noreferrer" style={styles.socialIcon}><SiSpotify size={22} /></a>
                <a href="https://www.instagram.com/lean_ums/" target="_blank" rel="noreferrer" style={styles.socialIcon}><FaInstagram size={22} /></a>
                <a href="https://www.tiktok.com/@lean_ums?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" style={styles.socialIcon}><FaTiktok size={22} /></a>
                <a href="https://www.youtube.com/@lean_ums" target="_blank" rel="noreferrer" style={styles.socialIcon}><FaYoutube size={22} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: "16px 0",
    transition: "all 0.3s ease",
    background: "transparent",
  },
  navScrolled: {
    background: "rgba(13, 13, 13, 0.95)",
    backdropFilter: "blur(20px)",
    boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
    padding: "12px 0",
  },
  navContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    color: "#ffffff",
  },
  desktopMenu: {
    display: "flex",
    gap: "28px",
    alignItems: "center",
  },
  navLink: {
    color: "#a0a0b0",
    fontWeight: 500,
    fontSize: "0.9rem",
    transition: "color 0.3s ease",
    textDecoration: "none",
  },
  hamburger: {
    display: "none",
    background: "none",
    color: "#ffffff",
    fontSize: "1.5rem",
    "@media (max-width: 768px)": {
      display: "block",
    },
  },
  mobileMenu: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    height: "100vh",
    background: "rgba(13, 13, 13, 0.98)",
    backdropFilter: "blur(20px)",
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mobileMenuContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
  },
  mobileLink: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#ffffff",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  socialRow: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
  },
  socialIcon: {
    color: "#a0a0b0",
    transition: "color 0.3s ease",
    display: "flex",
    alignItems: "center",
  },
};

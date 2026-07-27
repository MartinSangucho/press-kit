import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEnvelope, FaInstagram, FaTiktok, FaYoutube, FaCheck, FaCopy } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";

const socialLinks = [
  { icon: <SiSpotify size={22} />, label: "Spotify", url: "https://open.spotify.com/intl-es/artist/1khHHAvDKYMWoxP6chcH6y?si=uxs84qCiRXeDn6LuMUZevA", color: "#1DB954" },
  { icon: <FaInstagram size={22} />, label: "Instagram", url: "https://www.instagram.com/lean_ums/", color: "#E4405F" },
  { icon: <FaTiktok size={22} />, label: "TikTok", url: "https://www.tiktok.com/@lean_ums?is_from_webapp=1&sender_device=pc", color: "#ffffff" },
  { icon: <FaYoutube size={22} />, label: "YouTube", url: "https://www.youtube.com/@Lean-UMS1", color: "#FF0000" },
];

export default function Contacto() {
  const [copied, setCopied] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const email = "leandreams1812@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contacto" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          <span style={styles.blue}>Contacto</span>
        </h2>
        <div style={styles.divider} />
        <p style={styles.subtitle}>
          ¿Tienes un proyecto, evento o colaboración en mente? ¡Hablemos!
        </p>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={styles.card}
        >
          <div style={styles.emailSection}>
            <div style={styles.emailIcon}>
              <FaEnvelope size={24} />
            </div>
            <div>
              <p style={styles.emailLabel}>Envíame un correo</p>
              <p style={styles.emailAddress}>{email}</p>
            </div>
            <button onClick={handleCopy} style={styles.copyBtn}>
              {copied ? <><FaCheck /> Copiado</> : <><FaCopy /> Copiar</>}
            </button>
          </div>

          <div style={styles.socialGrid}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                style={styles.socialCard}
              >
                <div style={{ color: link.color, marginBottom: 8 }}>
                  {link.icon}
                </div>
                <span style={styles.socialLabel}>{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  container: {
    textAlign: "center",
  },
  title: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 700,
    marginBottom: "8px",
  },
  blue: { color: "#2563eb" },
  divider: {
    width: "60px",
    height: "4px",
    background: "#2563eb",
    borderRadius: "2px",
    margin: "0 auto 16px",
  },
  subtitle: {
    color: "#a0a0b0",
    fontSize: "1.1rem",
    marginBottom: "60px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  card: {
    background: "#141428",
    borderRadius: "20px",
    padding: "40px",
    border: "1px solid rgba(37, 99, 235, 0.15)",
  },
  emailSection: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "20px 24px",
    background: "rgba(37, 99, 235, 0.08)",
    borderRadius: "12px",
    marginBottom: "32px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  emailIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    flexShrink: 0,
  },
  emailLabel: {
    color: "#a0a0b0",
    fontSize: "0.85rem",
    textAlign: "left",
  },
  emailAddress: {
    color: "#ffffff",
    fontSize: "1.1rem",
    fontWeight: 600,
    textAlign: "left",
    wordBreak: "break-all",
  },
  copyBtn: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "10px 20px",
    background: "#2563eb",
    color: "#ffffff",
    borderRadius: "50px",
    fontWeight: 600,
    fontSize: "0.85rem",
    transition: "all 0.3s ease",
    flexShrink: 0,
  },
  socialGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
  },
  socialCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 12px",
    background: "#1a1a2e",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.05)",
    transition: "all 0.3s ease",
    textDecoration: "none",
    color: "#ffffff",
  },
  socialLabel: {
    fontSize: "0.8rem",
    fontWeight: 500,
  },
};

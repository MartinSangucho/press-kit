import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SiSpotify } from "react-icons/si";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import stats from "../data/stats";

const iconMap = {
  Spotify: <SiSpotify size={28} />,
  TikTok: <FaTiktok size={28} />,
  Instagram: <FaInstagram size={28} />,
  YouTube: <FaYoutube size={28} />,
};

function AnimatedCounter({ target, inView }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count.toLocaleString("es-EC")}
    </span>
  );
}

export default function Estadisticas() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="estadisticas" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          Mis <span style={styles.blue}>Estadísticas</span>
        </h2>
        <div style={styles.divider} />
        <p style={styles.subtitle}>
          El impacto de mi música en las plataformas digitales.
        </p>

        <div ref={ref} style={styles.grid}>
          {stats.map((stat, i) => (
            <motion.a
              key={stat.id}
              href={stat.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={styles.card}
            >
              <div style={{ ...styles.iconCircle, background: stat.color === "#000000" ? "#1a1a2e" : stat.color + "20", color: stat.color === "#000000" ? "#ffffff" : stat.color }}>
                {iconMap[stat.platform]}
              </div>
              <div style={styles.number}>
                <AnimatedCounter target={stat.value} inView={inView} />
              </div>
              <div style={styles.platform}>{stat.platform}</div>
              <div style={styles.label}>{stat.label}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    background: "linear-gradient(180deg, transparent 0%, rgba(20,20,40,0.5) 50%, transparent 100%)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "24px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "32px 20px",
    background: "#141428",
    borderRadius: "16px",
    border: "1px solid rgba(37, 99, 235, 0.1)",
    transition: "all 0.3s ease",
    textDecoration: "none",
    color: "#ffffff",
  },
  iconCircle: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
  },
  number: {
    fontSize: "2.2rem",
    fontWeight: 800,
    color: "#ffffff",
    marginBottom: "4px",
  },
  platform: {
    fontSize: "1rem",
    fontWeight: 600,
    color: "#ffffff",
  },
  label: {
    fontSize: "0.85rem",
    color: "#a0a0b0",
    marginTop: "2px",
  },
};

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaSpotify } from "react-icons/fa";
import releases from "../data/releases";

export default function Musica() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="musica" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          Música más <span style={styles.blue}>escuchada</span>
        </h2>
        <div style={styles.divider} />
        <p style={styles.subtitle}>
          Mis canciones más escuchadas en tu plataforma favorita.
        </p>

        <div ref={ref} style={styles.grid}>
          {releases.map((release, i) => (
            <motion.a
              key={release.id}
              href={release.spotify}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={styles.card}
            >
              <div style={styles.coverWrapper}>
                <img
                  src={release.cover}
                  alt={release.title}
                  style={styles.cover}
                  loading="lazy"
                />
                <div style={styles.playOverlay}>
                  <div style={styles.playBtn}>
                    <FaSpotify size={32} />
                  </div>
                </div>
              </div>
              <div style={styles.cardInfo}>
                <h3 style={styles.cardTitle}>{release.title}</h3>
                <p style={styles.cardYear}>{release.year} · {release.type}</p>
              </div>
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
    maxWidth: "1200px",
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "30px",
  },
  card: {
    background: "#141428",
    borderRadius: "16px",
    overflow: "hidden",
    border: "1px solid rgba(37, 99, 235, 0.1)",
    transition: "all 0.3s ease",
    textDecoration: "none",
    color: "#ffffff",
    display: "block",
  },
  coverWrapper: {
    position: "relative",
    aspectRatio: "1",
    overflow: "hidden",
  },
  cover: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  playOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  playBtn: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#1DB954",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
  },
  cardInfo: {
    padding: "20px",
  },
  cardTitle: {
    fontSize: "1.1rem",
    fontWeight: 600,
    marginBottom: "4px",
  },
  cardYear: {
    color: "#a0a0b0",
    fontSize: "0.9rem",
  },
};

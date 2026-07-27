import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPlay } from "react-icons/fa";
import videos from "../data/videos";

export default function Videos() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="videos" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          <span style={styles.blue}>Videos</span>
        </h2>
        <div style={styles.divider} />
        <p style={styles.subtitle}>
          Visualiza mis videos oficiales y presentaciones en vivo.
        </p>

        <div ref={ref} style={styles.grid}>
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={styles.card}
            >
              <div style={styles.videoWrapper}>
                <iframe
                  src={video.url}
                  title={video.title}
                  style={styles.iframe}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div style={styles.cardInfo}>
                <FaPlay style={{ color: "#2563eb", marginRight: 8 }} />
                <span style={styles.cardTitle}>{video.title}</span>
              </div>
            </motion.div>
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
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "30px",
  },
  card: {
    background: "#141428",
    borderRadius: "16px",
    overflow: "hidden",
    border: "1px solid rgba(37, 99, 235, 0.1)",
  },
  videoWrapper: {
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
    overflow: "hidden",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
  },
  cardInfo: {
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: "0.95rem",
    fontWeight: 500,
  },
};

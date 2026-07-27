import { motion } from "framer-motion";
import { FaPlay, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="inicio" style={styles.hero}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={styles.imageContainer}
        >
          <img
            src="/images/artist-photo.jpg"
            alt="Lean_ums"
            style={styles.artistImage}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={styles.name}
        >
          Lean_ums
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={styles.tagline}
        >
          Artista | Compositor
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={styles.quote}
        >
          "No escribo canciones para que las escuchen; las escribo para que alguien se sienta acompañado al escucharlas."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={styles.buttons}
        >
          <a href="#musica" style={styles.btnPrimary}>
            <FaPlay /> Escuchar música
          </a>
          <a href="#contacto" style={styles.btnOutline}>
            <FaEnvelope /> Contacto
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={styles.scrollIndicator}
      >
        <div style={styles.scrollLine} />
      </motion.div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    height: "100vh",
    minHeight: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 50%, #0d0d0d 100%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(13,13,13,0.4) 0%, rgba(13,13,13,0.8) 70%, rgba(13,13,13,1) 100%)",
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 20px",
  },
  imageContainer: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "4px solid #2563eb",
    boxShadow: "0 0 40px rgba(37, 99, 235, 0.3)",
    marginBottom: "24px",
  },
  artistImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  name: {
    fontSize: "clamp(3rem, 8vw, 6rem)",
    fontWeight: 800,
    letterSpacing: "-2px",
    marginBottom: "8px",
    background: "linear-gradient(135deg, #ffffff 0%, #2563eb 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  tagline: {
    fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
    color: "#a0a0b0",
    fontWeight: 300,
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "24px",
  },
  quote: {
    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
    color: "#2563eb",
    fontWeight: 300,
    fontStyle: "italic",
    maxWidth: "600px",
    lineHeight: 1.6,
    marginBottom: "40px",
  },
  buttons: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 32px",
    background: "#2563eb",
    color: "#ffffff",
    borderRadius: "50px",
    fontWeight: 600,
    fontSize: "1rem",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 20px rgba(37, 99, 235, 0.25)",
    textDecoration: "none",
  },
  btnOutline: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 32px",
    background: "transparent",
    color: "#ffffff",
    border: "2px solid rgba(255,255,255,0.3)",
    borderRadius: "50px",
    fontWeight: 600,
    fontSize: "1rem",
    transition: "all 0.3s ease",
    textDecoration: "none",
  },
  scrollIndicator: {
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
  },
  scrollLine: {
    width: "2px",
    height: "40px",
    background: "linear-gradient(to bottom, #2563eb, transparent)",
    borderRadius: "1px",
    animation: "scrollPulse 2s ease-in-out infinite",
  },
};

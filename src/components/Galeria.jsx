import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTimes } from "react-icons/fa";
import gallery from "../data/gallery";

function Lightbox({ image, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={lbStyles.overlay}
      onClick={onClose}
    >
      <button style={lbStyles.closeBtn} onClick={onClose}>
        <FaTimes size={24} />
      </button>
      <motion.img
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        src={image.src}
        alt={image.alt}
        style={lbStyles.image}
        onClick={(e) => e.stopPropagation()}
      />
      <p style={lbStyles.caption}>{image.alt}</p>
    </motion.div>
  );
}

const lbStyles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.95)",
    zIndex: 2000,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    cursor: "pointer",
  },
  closeBtn: {
    position: "absolute",
    top: "20px",
    right: "20px",
    background: "none",
    border: "none",
    color: "#ffffff",
    fontSize: "1.5rem",
    cursor: "pointer",
    zIndex: 2001,
  },
  image: {
    maxWidth: "90vw",
    maxHeight: "80vh",
    objectFit: "contain",
    borderRadius: "12px",
    cursor: "default",
  },
  caption: {
    color: "#a0a0b0",
    marginTop: "16px",
    fontSize: "1rem",
  },
};

export default function Galeria() {
  const [selected, setSelected] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="galeria" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          <span style={styles.blue}>Galería</span>
        </h2>
        <div style={styles.divider} />
        <p style={styles.subtitle}>
          Momentos capturados de mi trayectoria musical.
        </p>

        <div ref={ref} style={styles.grid}>
          {gallery.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={styles.gridItem}
              onClick={() => setSelected(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={styles.gridImage}
                loading="lazy"
              />
              <div style={styles.gridOverlay}>
                <span style={styles.gridOverlayText}>{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <Lightbox image={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
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
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "16px",
  },
  gridItem: {
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
    aspectRatio: "4/3",
  },
  gridImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  gridOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
    display: "flex",
    alignItems: "flex-end",
    padding: "16px",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  gridOverlayText: {
    color: "#ffffff",
    fontSize: "0.9rem",
    fontWeight: 500,
  },
};

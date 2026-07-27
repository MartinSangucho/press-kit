import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCalendarAlt, FaMusic, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

export default function SobreMi() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const infoItems = [
    { icon: <FaMusic />, label: "Géneros", value: "Pop / Pop Alternativo / Balada Pop" },
    { icon: <FaGlobe />, label: "País", value: "Ecuador" },
    { icon: <FaCalendarAlt />, label: "Proyecto", value: "En crecimiento" },
    { icon: <FaMapMarkerAlt />, label: "Audiencia", value: "EC, MX, CO" },
  ];

  return (
    <section id="sobre-mi" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={styles.imageWrapper}
        >
          <img
            src="/press-kit/images/about-photo.jpg"
            alt="Lean_ums - Sobre mí"
            style={styles.image}
          />
          <div style={styles.imageAccent} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={styles.textSide}
        >
          <h2 style={styles.title}>
            Sobre <span style={styles.blue}>Mí</span>
          </h2>
          <div style={styles.dividerLeft} />

          <p style={styles.bio}>
            Lean_ums es un artista ecuatoriano que utiliza la música para contar
            historias reales sobre el amor, la distancia, las despedidas y el
            crecimiento personal. Su estilo fusiona el pop con influencias
            contemporáneas, creando canciones melódicas y cercanas con las que
            muchas personas pueden identificarse.
          </p>
          <p style={styles.bio}>
            Su proyecto busca conectar desde la honestidad, priorizando las
            emociones y las experiencias por encima de las tendencias.
          </p>
          <p style={styles.quote}>
            "No escribo canciones para que las escuchen; las escribo para que
            alguien se sienta acompañado al escucharlas."
          </p>

          <div style={styles.infoGrid}>
            {infoItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                style={styles.infoItem}
              >
                <div style={styles.infoIcon}>{item.icon}</div>
                <div>
                  <div style={styles.infoValue}>{item.value}</div>
                  <div style={styles.infoLabel}>{item.label}</div>
                </div>
              </motion.div>
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
    maxWidth: "1200px",
    margin: "0 auto",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "100%",
    borderRadius: "16px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
    objectFit: "cover",
    aspectRatio: "4/5",
  },
  imageAccent: {
    position: "absolute",
    bottom: "-20px",
    right: "-20px",
    width: "100%",
    height: "100%",
    border: "3px solid #2563eb",
    borderRadius: "16px",
    zIndex: -1,
  },
  textSide: {},
  title: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 700,
    marginBottom: "8px",
  },
  blue: {
    color: "#2563eb",
  },
  dividerLeft: {
    width: "60px",
    height: "4px",
    background: "#2563eb",
    borderRadius: "2px",
    marginBottom: "24px",
  },
  bio: {
    color: "#a0a0b0",
    fontSize: "1.05rem",
    lineHeight: 1.8,
    marginBottom: "16px",
  },
  quote: {
    color: "#2563eb",
    fontSize: "1rem",
    fontStyle: "italic",
    lineHeight: 1.8,
    marginBottom: "16px",
    paddingLeft: "16px",
    borderLeft: "3px solid #2563eb",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "32px",
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "16px",
    background: "#141428",
    borderRadius: "12px",
    border: "1px solid rgba(37, 99, 235, 0.1)",
  },
  infoIcon: {
    fontSize: "1.2rem",
    color: "#2563eb",
    flexShrink: 0,
  },
  infoValue: {
    fontWeight: 600,
    fontSize: "1rem",
    color: "#ffffff",
  },
  infoLabel: {
    fontSize: "0.8rem",
    color: "#a0a0b0",
  },
};

import { FaMusic, FaInstagram, FaTiktok, FaYoutube, FaHeart } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.top}>
          <a href="#inicio" style={styles.logo}>
            <FaMusic style={{ color: "#2563eb", marginRight: 8 }} />
            Lean_ums
          </a>
          <div style={styles.socials}>
            <a href="https://open.spotify.com/intl-es/artist/1khHHAvDKYMWoxP6chcH6y?si=uxs84qCiRXeDn6LuMUZevA" target="_blank" rel="noreferrer" style={styles.socialLink}><SiSpotify size={20} /></a>
            <a href="https://www.instagram.com/lean_ums/" target="_blank" rel="noreferrer" style={styles.socialLink}><FaInstagram size={20} /></a>
            <a href="https://www.tiktok.com/@lean_ums?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" style={styles.socialLink}><FaTiktok size={20} /></a>
            <a href="https://www.youtube.com/@Lean-UMS1" target="_blank" rel="noreferrer" style={styles.socialLink}><FaYoutube size={20} /></a>
          </div>
        </div>

        <div style={styles.dividerLine} />

        <div style={styles.bottom}>
          <p style={styles.copyright}>
            &copy; 2026 Lean_ums. Todos los derechos reservados.
          </p>
          <p style={styles.made}>
            Hecho con <FaHeart style={{ color: "#2563eb", margin: "0 4px", verticalAlign: "middle" }} /> para la música
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "40px 20px",
    borderTop: "1px solid rgba(255,255,255,0.05)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
    gap: "16px",
  },
  logo: {
    fontSize: "1.3rem",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    color: "#ffffff",
    textDecoration: "none",
  },
  socials: {
    display: "flex",
    gap: "16px",
  },
  socialLink: {
    color: "#a0a0b0",
    transition: "color 0.3s ease",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  dividerLine: {
    width: "100%",
    height: "1px",
    background: "rgba(255,255,255,0.08)",
    marginBottom: "20px",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "8px",
  },
  copyright: {
    color: "#a0a0b0",
    fontSize: "0.85rem",
  },
  made: {
    color: "#a0a0b0",
    fontSize: "0.85rem",
    display: "flex",
    alignItems: "center",
  },
};

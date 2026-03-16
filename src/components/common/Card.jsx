import { useState } from 'react';
import colors from '../../theme/colors';

const styles = {
  card: {
    backgroundColor: colors.bgPrimary,
    border: `1px solid ${colors.border}`,
    borderRadius: '12px',
    padding: '32px 24px',
    textAlign: 'center',
    transition: 'border-color 0.2s, transform 0.2s',
  },
  cardHover: {
    borderColor: colors.accent,
    transform: 'translateY(-4px)',
  },
  icon: {
    fontSize: '2rem',
    marginBottom: '16px',
    color: colors.accent,
  },
  title: {
    fontSize: '1.05rem',
    fontWeight: 600,
    marginBottom: '8px',
    color: colors.textPrimary,
  },
  description: {
    fontSize: '0.9rem',
    color: colors.textSecondary,
    lineHeight: 1.6,
  },
};

export default function Card({ icon, title, description }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ ...styles.card, ...(hovered ? styles.cardHover : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.icon}>{icon}</div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
}

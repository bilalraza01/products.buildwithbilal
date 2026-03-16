import colors from '../../theme/colors';

const floatingCircles = [
  { size: 140, top: '-5%', right: '0%', duration: 4, delay: 0 },
  { size: 120, bottom: '-5%', left: '-3%', duration: 5, delay: 0.8 },
  { size: 100, top: '35%', left: '25%', duration: 3.5, delay: 1.5 },
  { size: 80, top: '10%', left: '10%', duration: 4.5, delay: 0.4 },
  { size: 110, bottom: '10%', right: '10%', duration: 3.8, delay: 1.2 },
  { size: 60, top: '60%', left: '55%', duration: 5.5, delay: 2 },
];

// Inject keyframes once
if (typeof document !== 'undefined') {
  const id = 'preview-card-keyframes';
  if (!document.getElementById(id)) {
    const style = document.createElement('style');
    style.id = id;
    style.textContent = `
      @keyframes previewFloat {
        0%, 100% { transform: translateY(0) scale(1); opacity: 0.25; }
        50% { transform: translateY(-16px) scale(1.15); opacity: 0.55; }
      }
      @keyframes previewFlicker {
        0%, 100% { opacity: 0.2; }
        25% { opacity: 0.5; }
        50% { opacity: 0.15; }
        75% { opacity: 0.45; }
      }
    `;
    document.head.appendChild(style);
  }
}

const styles = {
  // outer styles handled by .preview-outer class
  bgBase: {
    position: 'absolute',
    inset: 0,
    backgroundColor: colors.bgSurface,
    borderRadius: '24px',
    border: `1px solid ${colors.border}`,
  },
  circle: {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: colors.accent,
    filter: 'blur(50px)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  // card styles handled by .preview-card-inner class
  label: {
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: colors.accent,
    marginBottom: '16px',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#1C1917',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  listItem: {
    fontSize: '0.9rem',
    color: '#78716C',
    lineHeight: 1.5,
    paddingLeft: '20px',
    position: 'relative',
  },
  bullet: {
    position: 'absolute',
    left: 0,
    top: '1px',
    color: colors.accent,
    fontWeight: 700,
  },
};

export default function PreviewCard({ label, title, items }) {
  return (
    <div className="preview-outer">
      <div style={styles.bgBase} />
      {floatingCircles.map((c, i) => (
        <div
          key={i}
          style={{
            ...styles.circle,
            width: c.size,
            height: c.size,
            top: c.top,
            bottom: c.bottom,
            left: c.left,
            right: c.right,
            animation: `previewFloat ${c.duration}s ease-in-out ${c.delay}s infinite, previewFlicker ${c.duration * 0.8}s ease-in-out ${c.delay}s infinite`,
          }}
        />
      ))}
      <div className="preview-card-inner">
        <div style={styles.label}>{label}</div>
        <div style={styles.title}>{title}</div>
        <ul style={styles.list}>
          {items.map((item, i) => (
            <li key={i} style={styles.listItem}>
              <span style={styles.bullet}>&#8250;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

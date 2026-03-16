import colors from '../../theme/colors';

// Inject keyframes once
if (typeof document !== 'undefined') {
  const id = 'accordion-progress-keyframes';
  if (!document.getElementById(id)) {
    const style = document.createElement('style');
    style.id = id;
    style.textContent = `
      @keyframes accordionFill {
        0% { height: 0%; }
        100% { height: 100%; }
      }
    `;
    document.head.appendChild(style);
  }
}

const styles = {
  wrapper: {
    position: 'relative',
    paddingLeft: '20px',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'all 0.3s ease',
  },
  lineTrack: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '3px',
    borderRadius: '3px',
    backgroundColor: colors.border,
    overflow: 'hidden',
  },
  lineFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    borderRadius: '3px',
    backgroundColor: colors.accent,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 0',
  },
  icon: {
    fontSize: '1.3rem',
    flexShrink: 0,
    transition: 'color 0.3s ease',
  },
  title: {
    fontSize: '1.05rem',
    fontWeight: 500,
    transition: 'color 0.3s ease',
  },
};

export default function AccordionItem({ icon, title, isOpen, onClick, duration, cycleKey }) {
  return (
    <div style={styles.wrapper} onClick={onClick}>
      <div style={styles.lineTrack}>
        {isOpen && (
          <div
            key={cycleKey}
            style={{
              ...styles.lineFill,
              animation: `accordionFill ${duration}ms linear forwards`,
            }}
          />
        )}
      </div>
      <div style={styles.header}>
        <span
          style={{
            ...styles.icon,
            color: isOpen ? colors.accent : colors.textSecondary,
          }}
        >
          {icon}
        </span>
        <span
          style={{
            ...styles.title,
            color: isOpen ? colors.accent : colors.textSecondary,
            fontWeight: isOpen ? 600 : 500,
          }}
        >
          {title}
        </span>
      </div>
    </div>
  );
}

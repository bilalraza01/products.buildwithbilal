import colors from '../../theme/colors';

const styles = {
  button: {
    padding: '14px 28px',
    fontSize: '1rem',
    fontWeight: 600,
    backgroundColor: colors.accent,
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
};

export default function Button({ children, type = 'button', style }) {
  return (
    <button
      type={type}
      style={{ ...styles.button, ...style }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = colors.accentHover)}
      onMouseLeave={(e) => (e.target.style.backgroundColor = colors.accent)}
    >
      {children}
    </button>
  );
}

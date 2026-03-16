import colors from '../../theme/colors';

const styles = {
  label: {
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    fontWeight: 600,
    letterSpacing: '1.5px',
    color: colors.accent,
    marginBottom: '12px',
  },
  // title styles handled by .section-header-title class
};

export default function SectionHeader({ label, title }) {
  return (
    <>
      <p style={styles.label}>{label}</p>
      <h2 className="section-header-title">{title}</h2>
    </>
  );
}

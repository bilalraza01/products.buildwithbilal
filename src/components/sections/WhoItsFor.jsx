import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SectionHeader from '../common/SectionHeader';
import colors from '../../theme/colors';
import { container, section } from '../../theme/styles';

const items = [
  'Mid-level engineers targeting senior roles',
  'Engineers prepping for FAANG & startup interviews',
  'Self-taught devs filling system design gaps',
  'Anyone tired of vague "it depends" answers',
];

const styles = {
  list: {
    listStyle: 'none',
    maxWidth: '560px',
    margin: '0 auto',
    textAlign: 'left',
    padding: 0,
  },
  item: {
    padding: '12px 0',
    fontSize: '1.05rem',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    borderBottom: `1px solid ${colors.border}`,
    color: colors.textPrimary,
  },
  itemLast: {
    borderBottom: 'none',
  },
  icon: {
    color: colors.accent,
    flexShrink: 0,
  },
};

export default function WhoItsFor() {
  return (
    <section style={section}>
      <div style={{ ...container, textAlign: 'center' }}>
        <SectionHeader
          label="Who It's For"
          title="Built for Engineers Who Want to Level Up"
        />
        <ul style={styles.list}>
          {items.map((item, i) => (
            <li
              key={i}
              style={{
                ...styles.item,
                ...(i === items.length - 1 ? styles.itemLast : {}),
              }}
            >
              <CheckCircleOutlineIcon style={styles.icon} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

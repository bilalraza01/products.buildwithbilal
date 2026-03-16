import OptInForm from '../common/OptInForm';
import colors from '../../theme/colors';
import { container, sectionAlt } from '../../theme/styles';

const styles = {
  // h2 styles handled by .final-cta-title class
  subtext: {
    color: colors.textSecondary,
    marginBottom: '36px',
    fontSize: '1.1rem',
  },
};

export default function FinalCta() {
  return (
    <section style={sectionAlt}>
      <div style={{ ...container, textAlign: 'center' }}>
        <h2 className="final-cta-title">
          Don't Walk Into Your Next Interview Unprepared
        </h2>
        <p style={styles.subtext}>
          Get 300 system design questions delivered to your inbox, FREE.
        </p>
        <OptInForm />
      </div>
    </section>
  );
}

import SectionHeader from '../common/SectionHeader';
import avatar from '../../assets/avatar.jpg';
import colors from '../../theme/colors';
import { container, section } from '../../theme/styles';

const styles = {
  // content styles handled by .about-content class
  avatar: {
    width: '120px',
    height: '120px',
    marginTop: '24px',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'top',
    border: `3px solid ${colors.accent}`,
    flexShrink: 0,
  },
  name: {
    fontSize: '1.3rem',
    fontWeight: 700,
    marginBottom: '4px',
    color: colors.textPrimary,
  },
  role: {
    color: colors.accent,
    fontSize: '0.95rem',
    marginBottom: '12px',
  },
  bio: {
    color: colors.textSecondary,
    fontSize: '0.95rem',
    lineHeight: 1.7,
  },
};

export default function About() {
  return (
    <section style={section}>
      <div style={{ ...container, textAlign: 'center' }}>
        <SectionHeader label="About" title="Who's Behind This?" />
        <div className="about-content">
          <img src={avatar} alt="Bilal Raza" style={styles.avatar} />
          <div>
            <h3 style={styles.name}>Bilal Raza</h3>
            <p style={styles.role}>Software Engineer</p>
            <p style={styles.bio}>
              I've spent years building and scaling backend systems. I created
              this guide because most system design resources are either too
              shallow or too academic. These 300 questions are the ones that
              actually come up in interviews and the ones you need to think
              through to build real systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

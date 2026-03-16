import QuizIcon from '@mui/icons-material/Quiz';
import SectionHeader from '../common/SectionHeader';
import colors from '../../theme/colors';
import { container, sectionAlt } from '../../theme/styles';

const questions = [
  'How would you design a URL shortener that handles 10M clicks per day?',
  'When would you choose eventual consistency over strong consistency?',
  'Design a notification system that scales to 500M users.',
  'How do you handle a cache stampede during a flash sale?',
];

const styles = {
  list: {
    maxWidth: '640px',
    margin: '0 auto',
    textAlign: 'left',
  },
  question: {
    padding: '20px 24px 20px 56px',
    backgroundColor: colors.bgPrimary,
    border: `1px solid ${colors.border}`,
    borderRadius: '10px',
    marginBottom: '16px',
    fontSize: '1.05rem',
    position: 'relative',
    color: colors.textPrimary,
    lineHeight: 1.6,
  },
  icon: {
    position: 'absolute',
    left: '18px',
    top: '20px',
    color: colors.accent,
    fontSize: '1.3rem',
  },
  more: {
    marginTop: '24px',
    fontSize: '1.1rem',
    color: colors.accent,
    fontWeight: 600,
    textAlign: 'center',
  },
};

export default function SampleQuestions() {
  return (
    <section style={sectionAlt}>
      <div style={{ ...container, textAlign: 'center' }}>
        <SectionHeader
          label="Sneak Peek"
          title="Sample Questions From the Guide"
        />
        <div style={styles.list}>
          {questions.map((q, i) => (
            <div key={i} style={styles.question}>
              <QuizIcon style={styles.icon} />
              {q}
            </div>
          ))}
        </div>
        <p style={styles.more}>+ 296 more inside &rarr;</p>
      </div>
    </section>
  );
}

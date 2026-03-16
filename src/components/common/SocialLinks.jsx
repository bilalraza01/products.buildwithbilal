import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import colors from '../../theme/colors';

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bilal-raza-863650253/',
    Icon: LinkedInIcon,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/build.with.bilal/',
    Icon: InstagramIcon,
  },
];

const styles = {
  wrapper: {
    display: 'flex',
    gap: '12px',
  },
  link: {
    color: colors.textSecondary,
    transition: 'color 0.2s',
    display: 'flex',
    alignItems: 'center',
  },
};

export default function SocialLinks({ size = 'medium' }) {
  return (
    <div style={styles.wrapper}>
      {socials.map(({ name, url, Icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          aria-label={name}
          onMouseEnter={(e) => (e.currentTarget.style.color = colors.textPrimary)}
          onMouseLeave={(e) => (e.currentTarget.style.color = colors.textSecondary)}
        >
          <Icon fontSize={size} />
        </a>
      ))}
    </div>
  );
}

import { useState, useEffect, useRef, useCallback } from 'react';
import BalanceIcon from '@mui/icons-material/Balance';
import StorageIcon from '@mui/icons-material/Storage';
import BoltIcon from '@mui/icons-material/Bolt';
import SettingsIcon from '@mui/icons-material/Settings';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AccordionItem from '../common/AccordionItem';
import PreviewCard from '../common/PreviewCard';
import { container, sectionAlt } from '../../theme/styles';
import colors from '../../theme/colors';

const items = [
  {
    icon: <BalanceIcon />,
    title: 'Scaling & Load Balancing',
    description:
      '75 questions covering horizontal vs vertical scaling, load balancer algorithms, auto-scaling strategies, and designing for millions of concurrent users.',
    preview: {
      label: 'Sample Questions',
      title: 'Scaling & Load Balancing',
      items: [
        'How would you scale a chat app to 10M concurrent users?',
        'Round-robin vs least-connections: when to use which?',
        'Design an auto-scaling policy for a flash sale event.',
        'How do you handle sticky sessions with load balancers?',
      ],
    },
  },
  {
    icon: <StorageIcon />,
    title: 'Database Design',
    description:
      '75 questions on SQL vs NoSQL tradeoffs, sharding strategies, replication, indexing, data modeling, and choosing the right database for the job.',
    preview: {
      label: 'Sample Questions',
      title: 'Database Design',
      items: [
        'When would you choose NoSQL over a relational database?',
        'How do you design a schema for a social media feed?',
        'Explain the tradeoffs of database sharding strategies.',
        'How does indexing affect write-heavy workloads?',
      ],
    },
  },
  {
    icon: <BoltIcon />,
    title: 'Caching & CDNs',
    description:
      '75 questions on cache invalidation patterns, eviction policies, write-through vs write-back, CDN architectures, and avoiding cache stampedes.',
    preview: {
      label: 'Sample Questions',
      title: 'Caching & CDNs',
      items: [
        'How do you handle cache invalidation at scale?',
        'LRU vs LFU: when does each eviction policy shine?',
        'What is a cache stampede and how do you prevent it?',
        'Design a multi-layer caching strategy for an e-commerce site.',
      ],
    },
  },
  {
    icon: <SettingsIcon />,
    title: 'System Tradeoffs',
    description:
      '75 questions on CAP theorem, consistency models, latency vs throughput, monolith vs microservices, and real-world architecture decisions.',
    preview: {
      label: 'Sample Questions',
      title: 'System Tradeoffs',
      items: [
        'Explain CAP theorem with a real-world example.',
        'When is eventual consistency acceptable?',
        'Monolith vs microservices for a 10-person startup?',
        'How do you decide between REST and gRPC?',
      ],
    },
  },
];

const styles = {
  topIcon: {
    color: colors.accent,
    marginBottom: '8px',
  },
  // heading styles handled by .whats-inside-heading class
  subtitle: {
    fontSize: '0.95rem',
    color: colors.textSecondary,
    lineHeight: 1.7,
    marginBottom: '32px',
  },
};

const AUTO_CYCLE_MS = 4000;

export default function WhatsInside() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
      setCycleKey((prev) => prev + 1);
    }, AUTO_CYCLE_MS);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const handleClick = (i) => {
    setActiveIndex(i);
    setCycleKey((prev) => prev + 1);
    startTimer();
  };

  const activePreview = items[activeIndex].preview;

  return (
    <section style={sectionAlt}>
      <div style={container}>
        <div className="whats-inside-row">
          <div className="whats-inside-left">
            <div style={styles.topIcon}>
              <AutoStoriesIcon fontSize="large" />
            </div>
            <h2 className="whats-inside-heading">What's Inside the Guide</h2>
            <p style={styles.subtitle}>
              300 curated questions across 4 core pillars that interviewers
              actually test you on.
            </p>
            {items.map((item, i) => (
              <AccordionItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                isOpen={activeIndex === i}
                onClick={() => handleClick(i)}
                duration={AUTO_CYCLE_MS}
                cycleKey={cycleKey}
              />
            ))}
          </div>
          <div className="whats-inside-right">
            <PreviewCard
              key={activePreview.title}
              label={activePreview.label}
              title={activePreview.title}
              items={activePreview.items}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

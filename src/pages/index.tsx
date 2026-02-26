import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Changelog`}
      description="Quiz Flow Documentation and Changelog">
      <main>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <Heading as="h1">{siteConfig.title}</Heading>
            <p>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                Get Started
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/blog">
                View Changelog
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

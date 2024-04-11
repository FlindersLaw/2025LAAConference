import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageSponsors from '@site/src/components/HomepageSponsors';
import {EOIButton, RegisterButton} from '@site/src/components/EOIButton';
import RegisterBanner from '@site/src/components/EOIBanner';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Hosted at <a href='https://www.flinders.edu.au/festival-plaza'>Flinders University's New City Campus!</a>
        </p>
        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`2024 ALAA Conference`}
      description="Australasian Legal Academics Association Conference 2024 <head />">
      <HomepageHeader />
      <main>
        <RegisterButton />
        <HomepageFeatures />
        <HomepageSponsors />
      </main>
    </Layout>
  );
}

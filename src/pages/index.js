import React from 'react';
import clsx from 'clsx';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">RL {siteConfig.title}</h1> */}
        <h1 className='hero__title'>HEGI KIT PARTS</h1>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <p>A design system for enterprise-level products. Create an efficient and enjoyable work experience.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg mt-4"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Homepage`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

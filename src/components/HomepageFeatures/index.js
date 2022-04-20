import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Design values',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This is internal standard for evaluating design quality.
        Based on the assumption that "everyone is pursuing happiness at work",
        we have added the two values of "Meaningfulness" and "Growth" on the basis of "Certainty" and "Naturalness" to guide each designer towards better judgment and decision-making.
      </>
    ),
  },
  {
    title: 'Guidelines',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The use of design patterns in enterprise-level businesses can significantly increase the certainty of the R&D team,
        save unnecessary design and maintain system consistency, allowing designers to focus on creativity where it is most needed.
      </>
    ),
  },
  {
    title: 'Components',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Following the Design specification, we developed a React UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col-4')}>
      <div className="text-center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text-center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

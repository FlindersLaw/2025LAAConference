import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Technology and Law',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        After a decade of technological advancements and nearly two years of
        rapid development of large language models, examination of the efffects
        and implications of emergent technologies on legal scholarship, education
        and practice.
      </>
    ),
  },
  {
    title: 'Globalisation and Legal Systems',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Analysing how globalisation is reshaping legal systems and the challenges
      and opportunities this presents for legal academics.
      </>
    ),
  },
  {
    title: 'Social Justice and Legal Scholarship',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      Exploring the role of legal scholarship and education in promoting social
      justice and equity, and addressing systemic inequalities within legal systems.
      </>
    ),
  },
  {
    title: 'Colonial experiences and truth-telling in Australia and Aotearoa New Zealand',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      Focus on the law as a technology of dispossession in the Pacific, and legal
      futures in the aftermath of the 2023 Australian referendum, Maori experiences
      in contemporary Aotearoa New Zealand, and movements of truth-telling and treaty.
      </>
    ),
  },
  {
    title: "Environmental Law and Earth's Futures",
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      Discussing the role of legal scholarship and education in addressing environmental
      challenges and promoting the future/s of our planet and beyond.
      </>
    ),
  },
  {
    title: 'Interdisciplinary and intercultural Perspectives',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      Encouraging interdisciplinary and intercultural collaboration and exploring how
      insights from other disciplines and diverse cultures can enrich legal scholarship
      and education.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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

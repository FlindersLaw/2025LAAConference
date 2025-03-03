import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import './HomepageFeatures.css';

const FeatureList = [
  {
    title: 'Subtheme 1',
    thumbnail: 'img/legaltech.png',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </>
    ),
  },
  {
    title: 'Subtheme 2',
    thumbnail: 'img/globalisation.jpg',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <p>As many subthemes as required can be inserted. Suggest to
        insert in a grid three across.</p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </>
    ),
  },
  {
    title: 'Subtheme 3',
    thumbnail: 'img/social_justice.jpg',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </>
    ),
  },
];

function Feature({thumbnail, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={thumbnail} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
      </div>
      <div className='text--justified padding-horiz--md'>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="HPHeading">
          <h1>Conference Theme Goes Here</h1>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

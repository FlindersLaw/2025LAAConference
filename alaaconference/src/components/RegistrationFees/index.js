import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import './RegistrationFees.css';
import {EOIButton, RegisterButton} from '@site/src/components/EOIButton';

const PaymentGatewayURL = 'https://pay.flinders.edu.au/BGL024';

const FeeInfoList = [
  {
    title: 'ECA Day (3 July 2024)',
    description: (
      <>
        <p>
          ECA Day registration is free for early career academics
          (less than 5 years).
        </p>
        <p>
          If you are not an early career academic you 
          may still register for the ECA day but you must also register for 
          the Conference.
        </p>
      </>
    ),
  },
  {
    title: 'Conference Registration',
    description: (
      <>
      <table className='registrationFeeTable'>
          <tr>
              <th>Early Bird registration</th>
              <td>$250.00</td>
          </tr>
          <tr>
              <th>Regular Registration</th>
              <td>$300.00</td>
          </tr>
      </table>
      <p>
      Early bird registration is now open and closes
      on <strong>17 May</strong>.
      </p>
      </>
    ),
  },
  {
    title: 'Gala Dinner',
    description: (
      <>
      <p>
      The Gala dinner will be held on the evening of <strong>4 July</strong> at the
      Adelaide Convention Centre.
      </p>
      <p>
        If you have not yet registered for the 
        Gala Dinner please register below.
      </p>
      <p>
        You will need to register any plu one separately.
      </p>
      </>
    ),
  },
];

const ButtonInfoList = [
  {
    instructions: (
      <RegisterButton registerURL='https://docassemble2.flinders.edu.au/interview?i=docassemble.2024ALAAConference:data/questions/eca.yml' buttonText='ECA Day Registration' />
    ),
  },
  {
    instructions: (
      <RegisterButton registerURL={PaymentGatewayURL} buttonText='Conference and Gala Day Registration' />
    )
  }
];

// Used to set up the display of the registration fee information
function FeeInfo({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
      </div>
      <div className='text--justified padding-horiz--md'>
        {description}
      </div>
    </div>
  );
}

// Used to set up the display of the buttons
function ButtonInfo({instructions}) {
  return (
    <div className={clsx('col col--6')}>
      <div className='text--center padding-horiz--md'>
        {instructions}
      </div>
    </div>
  );
}

export function RegistrationFees() {
  return (
    <section className={styles.RFfeatures}>
      <div className="container">
        <div className="RFHeading">
          <h1>Registration</h1>
        </div>
        <div className="row">
          {FeeInfoList.map((props, idx) => (
            <FeeInfo key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Returns the registration buttons
export function RegistrationInstructions() {
  return (
    <section className={styles.RFfeatures}>
      <div className="container">
        <div className="row">
          {ButtonInfoList.map((props, idx) => (
            <ButtonInfo key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

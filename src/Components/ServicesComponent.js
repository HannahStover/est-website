import React from 'react';
import { Fade } from 'react-animation-components';

function Services(props) {
  return (
    <div>
      <Fade in>
        <div>
          <div className='row row-header'>
            <div className='col-12 col-sm-6'>
              <h2>Services</h2>
            </div>
          </div>
        </div>
        <div className='row row-content approach pb-5'>
          <ul className='col-12 col-md-6'>
            <h5>
              <b>Pre-Marital</b> <br></br>
              <cite>
                Pre-marital therapy can help ensure that you and your partner
                have a strong and healthy relationship.
              </cite>
            </h5>
            <br></br>
            <h5>
              <b>Marriage</b>
              <br></br>
              <cite>
                Marriage counseling is important for addressing marital concerns
                and helps couples take time out of their busy lives to come
                together and focus on themselves and each other.
              </cite>
            </h5>
            <br></br>
            <h5>
              <b>Family</b>
              <br></br>
              <cite>
                The key to having and keeping a successful family unit moving
                forward is to be able to understand and identify the needs of
                the individual members and balance the well-being of the family
                unit.
              </cite>
            </h5>
            <br></br>
            <h5>
              <b>Adolescent</b>
              <br></br>
              <cite>
                Adolescence is a critical link between childhood and adulthood,
                characterized by significant phsyical, psychological, and social
                transitions. These transitions carry new risks but also present
                opportunities to positively influence the immediate and future
                health of young people.
              </cite>
            </h5>
            <br></br>
            <h5>
              <b>Child</b>
              <br></br>
              <cite>
                Child counseling addresses issues that are negatively impacting
                a child's growth, development, mental health, and well-being.
              </cite>
            </h5>
          </ul>
        </div>
      </Fade>
    </div>
  );
}

export default Services;

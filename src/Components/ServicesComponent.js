import React from 'react';
import { Fade } from 'react-animation-components';

function Services(props) {
  return (
    <div>
      <Fade in>
        <div>
          <div className='row row-header'>
            <div className='col-12 col-sm-6'>
              <h1>Services</h1>
            </div>
          </div>
        </div>
        <div className='row row-content approach'>
          <div className='col-12 col-md-6'>
            <p>Pre-Marital</p>
            <p>Marraige</p>
            <p>Family</p>
            <p>Adolescent</p>
            <p>Child</p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Services;

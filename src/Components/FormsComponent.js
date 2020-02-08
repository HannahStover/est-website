import React from 'react';
import { Fade } from 'react-animation-components';

function Forms(props) {
  return (
    <div>
      <Fade in>
        <div className='container'>
          <div className='row row-header'>
            <div className='col-12 col-sm-6'>
              <h2>Getting Started</h2>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
        <div className='row row-content approach'>
          <div className='col-12 col-md-6'>
            <p>
              Please complete the following forms prior to your first session if
              possible. If you have any questions about the forms, please feel
              free to address them when you meet with me. Thank you!
            </p>
          </div>
          <div className='col-12 col-md-6'>
            <a href='/documents/ClientIntake.pdf'>Client Intake</a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Forms;

import React from 'react';
import { Fade } from 'react-animation-components';

function Approach(props) {
  return (
    <Fade in>
      <div className='container'>
        <div className='row row-header approach'>
          <div className='col-12 col-sm-6'>
            <h2>My Approach</h2>
            <br></br>
            <br></br>
            <p>
              I recieved my MA in Marriage, Child, and Family therapy in 1992,
              having completed my BA in intercultural studies in 1982. I work
              with individuals and families to help navigate complex
              relationships and to set long-term goals.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Approach;

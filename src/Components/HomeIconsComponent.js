import React from 'react';
import { Button } from 'reactstrap';

function HomeIcons(props) {
  return (
    <div>
      <div className='row'>
        <div className='col'>
          <a href='/approach' className='button' role='button'>
            Approach
          </a>
        </div>
        <div className='col'>
          <a href='/contact' className='button' role='button'>
            Appointments
          </a>
        </div>
        <div className='col'>
          <a href='/services' className='button' role='button'>
            Counseling
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeIcons;

{
  /* <div className='col'>
          <img src={idea} />
          <Button outline color='secondary'>
            Here are some resources that can help you on your journey.
          </Button>
        </div> */
}

import React from 'react';
import { Card, CardBody, Button, CardText, CardHeader } from 'reactstrap';

function HomeIcons(props) {
  return (
    <div>
      <div className='row mb-4 pb-5'>
        <div className='col'>
          <Button
            outline
            color='info'
            href='/approach'
            className='button'
            size='lg'
          >
            Approach
          </Button>{' '}
        </div>
        <div className='col'>
          <Button
            outline
            color='info'
            href='/approach'
            className='button'
            size='lg'
          >
            Services
          </Button>{' '}
        </div>
        <div className='col'>
          <Button
            outline
            color='info'
            href='/approach'
            className='button'
            size='lg'
          >
            Contact
          </Button>{' '}
        </div>
      </div>
    </div>
  );
}

export default HomeIcons;

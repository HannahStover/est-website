import React from 'react';
import { Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Fade, Stagger } from 'react-animation-components';

function About(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h3>About</h3>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';
import { baseUrl } from '../shared/baseUrl';

function RenderTherapist({ therapist }) {
    return(
        <li key={therapist.id} className='col-12 mt-5'>
            <Media tag='li'>
            <Media left href={'/'}
        </li>
    )
}



function Home(props) {
  return (
    <div className='container'>
      <div className='row align-items-start'>
        <div className='col-12 col-md m-1'>{/* Render Items Here */}</div>
      </div>
    </div>
  );
}

export default Home;

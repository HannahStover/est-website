import React from 'react';
import HomeIcons from './HomeIconsComponent';
import { Fade } from 'react-animation-components';

const Home = () => {
  return (
    <Fade in>
      <div className='container'>
        <div className='row row-header'>
          <div className='col-12 col-sm-6 mt-3'>
            <h1>Insights</h1>
            <br></br>
            <br></br>
            <p>A place for counseling, coaching, and spiritual development.</p>
            <br></br>
            <br></br>
            <HomeIcons />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Home;

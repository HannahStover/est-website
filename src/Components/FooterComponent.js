import React from 'react';

function Footer(props) {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-auto'>
            <h3>
              <a href='/home'>Home</a>
              &nbsp;&nbsp;&nbsp;
              <a href='/approach'>Approach</a>
              &nbsp;&nbsp;&nbsp;
              <a href='/forms'>Forms</a>
              &nbsp;&nbsp;&nbsp;
              <a href='/contact'>Contact</a>
            </h3>
          </div>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-auto'>
          <p>© Copyright 2020 Hannah Stover</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

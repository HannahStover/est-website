import React from 'react';

function Footer(props) {
  return (
    <div className='footer d-none d-md-block'>
      <div className='row justify-content-center'>
        <div className='col-auto mt-3'>
          <ul>
            <a href='/home' className='text-dark'>
              Home
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href='/approach' className='text-dark'>
              Approach
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href='/forms' className='text-dark'>
              Forms
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href='/contact' className='text-dark'>
              Contact
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href='http://www.hannahrosestover.co'
              target='blank'
              className='text-dark'
            >
              © Copyright 2020 Hannah Stover
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

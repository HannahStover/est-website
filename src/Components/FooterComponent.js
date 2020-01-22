import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-4 offset-1 col-sm-2'>
            <ul>
              <li>
                <Link to='/home'>Home</Link>
              </li>
              <li>
                <Link to='/approach'>Approach</Link>
              </li>
              <li>
                <Link to='/forms'>Fees & Forms</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>
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

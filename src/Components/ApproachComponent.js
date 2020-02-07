import React from 'react';
import { Fade } from 'react-animation-components';

function Approach(props) {
  return (
    <Fade in>
      <div className='container'>
        <div className='row row-header approach'>
          <div className='col-12 col-sm-6'>
            <h1>My Approach</h1>
            <br></br>
            <br></br>
            <p>
              MA in '92 marriage, child, and family Therapy, BA in 82
              intercultural studies As a Lincensed Marriage & Family Therapist,
              I perform counseling and emotional support to help families
              navigate relationship and behavioral issues, while seeking to
              secure a long-term solution to mental and emotional disorders and
              a wide variety of relationship issues. Marriage & Family Therapy
              is the modification of perceptions and behavior, as well as
              improvement of communication among spouses and family members in
              crisis. My specialties include marital conflict, dysfunctional
              behavior, communication issues, and mental illness. My approach
              begins with interviewing, observing, counseling, and customizing
              treatment plans for clients in marriages and families.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Approach;

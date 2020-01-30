import React from 'react';
import { Jumbotron } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <Jumbotron className='masthead'>
        <div className='container'>
          <div className='row row-header'>
            <div className='col-12 col-sm-6'>
              <h1>Elaine Stover Therapy</h1>
              <p>Marriage & Family Counselor</p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;

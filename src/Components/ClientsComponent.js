import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderClient({ client }) {
  return (
    <Card>
      <Link to={`/clients/${client.id}`}>
        <CardImg width='100%' src={baseUrl + client.image} alt={client.name} />
        <CardImgOverlay>
          <CardTitle>{client.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Clients = props => {
  const clients = props.clients.clients.map(client => {
    return (
      <div key={client.id} className='col-12 col-md-5 m-1'>
        <RenderClient client={client} />
      </div>
    );
  });

  if (props.clients.isLoading) {
    return (
      <div className='container'>
        <div className='row'>
          <Loading />
        </div>
      </div>
    );
  } else if (props.clients.errMess) {
    return (
      <div className='row'>
        <h4>{props.clients.errMess}</h4>
      </div>
    );
  } else {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h3> Clients </h3>
            <hr />
          </div>
        </div>
        <div className='row'>{clients}</div>
      </div>
    );
  }
};

export default Clients;

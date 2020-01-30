import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderClient({ client }) {
  return (
    <div className='col-12 col-md-5 m-1'>
      <FadeTransform
        in
        transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)'
        }}
      >
        <Card>
          <CardImg top src={baseUrl + client.image} alt={client.name} />
          <CardBody>
            <CardTitle>{client.name}</CardTitle>
            <CardText>{client.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    </div>
  );
}

const ClientDetail = props => {
  if (props.isLoading) {
    return (
      <div className='container'>
        <div className='row'>
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className='container'>
        <div className='row'>
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.client != null)
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h3>{props.client.name}</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
          <RenderClient client={props.client} />
        </div>
      </div>
    );
  else return <div></div>;
};

export default ClientDetail;

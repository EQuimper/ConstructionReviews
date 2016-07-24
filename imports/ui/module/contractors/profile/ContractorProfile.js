import React from 'react';
import { browserHistory } from 'react-router';
import { Button, Card, Container, Header, Icon, Image } from 'semantic-react';

import { LoadingPage } from '../../../layouts/LoadingPage';

export const ContractorProfile = ({ contractor }) => {
  if (contractor[0] !== undefined) {
    const { name } = contractor[0];
    return (
      <Container>
        <Card>
          <Image src={`http://semantic-ui.com/images/avatar2/large/elyse.png`} />
          <Header>Profile for {name}</Header>
        </Card>
        <Button
          onClick={() => browserHistory.push(`/reviews/new`)}
          inverted
        >
          <Icon name="edit" /> Write a Review
        </Button>
        <Button
          onClick={() => browserHistory.push(`/reviews/new`)}
          inverted
          color="red"
        >
          <Icon name="edit" /> Write a Review
        </Button>
      </Container>
    );
  }
  return (
    <LoadingPage />
  );
};

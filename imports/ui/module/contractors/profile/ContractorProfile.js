import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import {
  Button,
  Buttons,
  Card,
  Column,
  Container,
  Content,
  Divider,
  Description,
  Grid,
  Header,
  Icon,
  Image,
  LabeledButton,
  Meta,
  Rating,
  Row,
  Text,
} from 'semantic-react';
import { CardProfile } from './components/card-profile/CardProfile';
import { MenuActions } from './components/menu-actions/MenuActions';
import { LoadingPage } from '../../../layouts/LoadingPage';

export const ContractorProfile = ({ contractor }) => {
  if (contractor[0] !== undefined) {
    const { name, description, favorite_count } = contractor[0];
    return (
      <Container>
        <Grid divided>
          <Column width={8}>
            <Grid>
              <Row columns={2}>
                <Column width={2}>
                  <Image src={'http://semantic-ui.com/images/wireframe/image.png'} size="tiny" />
                </Column>
                <Column width={14}>
                  <h1>{name}</h1>
                </Column>
              </Row>
              <Divider />
              <Row columns={2}>
                <Column width={9}>
                  <CardProfile description={description} name={name} favorite_count={favorite_count} />
                </Column>
                <Column width={5}>
                  <MenuActions contractor={contractor[0]} />
                </Column>
              </Row>
            </Grid>
          </Column>
          <Column width={8}>
            <div>
              <Rating star size="large" initialValue={3} max={5} /> 155 Reviews
            </div>
            <br />
            <Button
              onClick={() => browserHistory.push('/reviews/new')}
              inverted
              color="red"
            >
              <Icon name="write square" /> Write a Review
            </Button>
          </Column>
        </Grid>
      </Container>
    );
  }
  return (
    <LoadingPage />
  );
};

ContractorProfile.propTypes = {
  contractor: PropTypes.array.isRequired,
};

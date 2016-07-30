import React, { PropTypes } from 'react';
import {
  Column,
  Container,
  Divider,
  Feed,
  Grid,
  Image,
  Rating,
  Row,
} from 'semantic-react';

import ReviewFeedContainer from './components/review-feed/ReviewFeedContainer';

import { CardProfile } from './components/card-profile/CardProfile';
import { MenuActions } from './components/menu-actions/MenuActions';
import { Review } from './components/review/Review';
import { LoadingPage } from '../../../layouts/LoadingPage';

export const ContractorProfile = ({ contractor }) => {
  if (contractor[0] !== undefined) {
    const { name } = contractor[0];
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
                  <CardProfile {...contractor[0]} />
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
            <Review contractor={contractor[0]} />
            <br />
            <ReviewFeedContainer contractor={contractor[0]} />
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

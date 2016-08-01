import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  Column,
  Container,
  Divider,
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
          <ReactCSSTransitionGroup
            component="div"
            className="eight wide column"
            transitionName="cardLoad"
            transitionEnterTimeout={600}
            transitionAppearTimeout={600}
            transitionLeaveTimeout={400}
            transitionAppear
          >
            <Grid>
              <Row columns={2}>
                <Column width={2}>
                  <Image src={'http://semantic-ui.com/images/wireframe/image.png'} size="tiny" />
                </Column>
                <Column width={9}>
                  <h1>{name}</h1>
                </Column>
                <Column width={3}>
                  <div>
                    <Rating star size="large" initialValue={3} max={5} /> 155 Reviews
                  </div>
                </Column>
              </Row>
              <Divider />
              <Row columns={2}>
                <Column width={9}>
                  <CardProfile {...contractor[0]} />
                </Column>
                <Column width={7}>
                  <MenuActions contractor={contractor[0]} />
                  <Review contractor={contractor[0]} />
                </Column>
              </Row>
            </Grid>
          </ReactCSSTransitionGroup>
          <Column width={8}>
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

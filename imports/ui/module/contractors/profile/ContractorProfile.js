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
  Text,
} from 'semantic-react';
import { LoadingPage } from '../../../layouts/LoadingPage';

export const ContractorProfile = ({ contractor }) => {
  if (contractor[0] !== undefined) {
    const { name } = contractor[0];
    return (
      <Container>
        <Grid divided>
          <Column width={8}>
            <Buttons>
              <Button emphasis="positive"><Icon name="bookmark" />Bookmark</Button>
              <Button><Icon name="share" />Share</Button>
              <Button><Icon name="photo" />New Photo</Button>
              <Button emphasis="negative"><Icon name="heart" />Recommended</Button>
            </Buttons>
            <Card>
              <Image src={'http://semantic-ui.com/images/avatar2/large/elyse.png'} />
              <Content>
                <Header>Contractor name: {name}</Header>
                <Meta>Roofer</Meta>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores deserunt distinctio harum nostrum
                  tempora.
                </Description>
                <Divider />
                <div>
                  <Content extra floated="left">
                    <Icon name="thumbs up" />155 Recommended
                  </Content>
                  <Content extra floated="right">
                    <Icon name="checked calendar" /> Joined 2016
                  </Content>
                </div>
              </Content>
            </Card>
          </Column>
          <Column width={4}>
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

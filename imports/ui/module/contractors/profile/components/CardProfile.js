import React, { PropTypes } from 'react';
import { Card, Content, Image, Header, Meta, Description, Divider, Icon } from 'semantic-react';

export const CardProfile = ({ name, description }) =>
  <Card>
    <Image
      src={'http://liveinportland.net/wp-content/uploads/2012/12/hollywood-district-in-portland-Google-Maps.jpg'} />
    <Content>
      <Header>Info</Header>
      <Divider />
      <Meta><Icon name="location arrow" />431 10 Avenue SE Calgary</Meta>
      <Meta><Icon name="marker" />T2G 0W3</Meta>
      <Meta><Icon name="call square" />(403) 261-7950</Meta>
      <Meta><Icon name="external square" /><a href="#" target="_blank">www.about.com</a></Meta>
      <Divider />
      <Description>
        {description}
      </Description>
      <Divider />
      <div>
        <Content extra floated="left">
          <Icon name="thumbs up" /> 155 Recommended
        </Content>
        <Content extra floated="right">
          <Icon name="checked calendar" /> Joined 2016
        </Content>
      </div>
    </Content>
  </Card>;

CardProfile.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

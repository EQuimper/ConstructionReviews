import React, { PropTypes } from 'react';
import { Card, Content, Image, Header, Meta, Description, Divider, Icon } from 'semantic-react';

export const CardProfile = ({ name, description }) =>
  <Card>
    <Image src={'http://semantic-ui.com/images/avatar2/large/elyse.png'} />
    <Content>
      <Header>Contractor name: {name}</Header>
      <Meta>Roofer</Meta>
      <Divider />
      <Description>
        <em>Description:</em> <p>{description}</p>
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
  </Card>;

CardProfile.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

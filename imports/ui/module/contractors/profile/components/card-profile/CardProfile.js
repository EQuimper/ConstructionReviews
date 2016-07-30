import React, { PropTypes } from 'react';
import { Card, Content, Image, Header, Meta, Description, Divider, Icon } from 'semantic-react';

// Components
import { RecommendedCount } from './components/RecommendedCount';

export const CardProfile = ({ name, description, favorite_count, company_website }) =>
  <Card>
    <Content>
      <div>
        <Content floated="left">
          <RecommendedCount count={favorite_count} />
        </Content>
        <Content floated="right">
          <Icon name="checked calendar" /> Joined 2016
        </Content>
      </div>
    </Content>
    <Image
      src={'http://liveinportland.net/wp-content/uploads/2012/12/hollywood-district-in-portland-Google-Maps.jpg'} />
    <Content>
      <Header>Info</Header>
      <Divider />
      <Meta><Icon name="location arrow" />431 10 Avenue SE Calgary</Meta>
      <Meta><Icon name="marker" />T2G 0W3</Meta>
      <Meta><Icon name="call square" />(403) 261-7950</Meta>
      <Meta>
        <Icon name="external square" />
        {company_website === null || !company_website ?
          <span>No website sorry</span> :
          <a href={`http://${company_website}`} target="_blank">
            {company_website}
          </a>
        }
      </Meta>
      <Divider />
      <Description>
        {description}
      </Description>
    </Content>
  </Card>;

CardProfile.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

import {
  Container,
  Button,
  Description,
  Meta,
  Items,
  Item,
  Header,
  Text,
  Image,
  Icon,
} from 'semantic-react';

export const ListContractors = ({ contractors }) =>
  <Container>
    <Items divided>
      {contractors.map((contractor, i) => {
        const { name, city, province, favorite_count } = contractor;
        return (
          <Item key={i} image="http://semantic-ui.com/images/wireframe/image.png">
            <Header>{name}</Header>
            <Meta>{city} | {province[0]}</Meta>
            <Description><Image src="http://semantic-ui.com/images/wireframe/short-paragraph.png" /></Description>
            <Text extra>
              <Icon name="thumbs up" />
              {favorite_count === 0 ? 0 : favorite_count} Recommended
            </Text>
            <Text extra>
              <Button
                className="ui right floated"
                inverted
                onClick={() => browserHistory.push(`/contractors/profile/${name}`)}
                color="red"
              >
                More Info
              </Button>
            </Text>
          </Item>
        );
      })}
    </Items>
  </Container>;

ListContractors.propTypes = {
  contractors: PropTypes.array,
};

import React from 'react';
import { browserHistory } from 'react-router';

import {
  Container,
  Content,
  Button,
  Divider,
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
        const { name, city, province } = contractor;
        return (
          <Item key={i} image="http://semantic-ui.com/images/wireframe/image.png">
            <Header>{name}</Header>
            <Meta>{city} | {province[0]}</Meta>
            <Description><Image src="http://semantic-ui.com/images/wireframe/short-paragraph.png" /></Description>
            <Text extra>Additional details</Text>
            <Text extra>
              <Button
                inverted
                className="ui right floated"
                onClick={() => browserHistory.push(`/contractors/profile/${name}`)}
              >
                More Info
              </Button>
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

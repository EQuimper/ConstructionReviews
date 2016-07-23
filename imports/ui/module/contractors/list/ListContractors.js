import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Contractors } from '../../../../api/contractors/contractors';

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
  Icon
} from 'semantic-react';

const ListContractors = ({ contractors }) =>
  <Container>
    <Items divided>
      {contractors.map((contractor, i) => (
        <Item key={i} image="http://semantic-ui.com/images/wireframe/image.png">
          <Header>{contractor.name}</Header>
          <Meta>{contractor.city} | {contractor.province[0]}</Meta>
          <Description><Image src="http://semantic-ui.com/images/wireframe/short-paragraph.png" /></Description>
          <Text extra>Additional details</Text>
          <Text extra>
            <Button inverted
                    className="ui right floated"
            >
              More Info
            </Button>
            <Button className="ui right floated"
                    inverted color="red"
            >
              More Info
            </Button>
          </Text>
        </Item>
      ))}
    </Items>
  </Container>;

export default createContainer(() => {
  Meteor.subscribe('getContractors');
  return {
    contractors: Contractors.find({}).fetch(),
  };
}, ListContractors);

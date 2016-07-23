import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Contractors } from '../../../../api/contractors/contractors';

const ListContractors = ({ contractors }) =>
  <div>
    <ul>
      {contractors.map((contractor, i) => (
        <Link to={`/contractors/profile/${contractor.name}`} key={i}>
          <li>
            {contractor.name}
          </li>
        </Link>
      ))}
    </ul>
  </div>;

export default createContainer(() => {
  Meteor.subscribe('getContractors');
  return {
    contractors: Contractors.find({}).fetch(),
  };
}, ListContractors);

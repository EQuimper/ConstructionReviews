import React, { PropTypes } from 'react';
import { Container } from 'semantic-react';

import { LoadingPage } from '../../../../layouts/LoadingPage';

export const UserProfile = ({ contractors, user }) => {
  if (!user) return <LoadingPage />;
  const { username } = user;
  return (
    <Container>
      <h1>Hello {username}</h1>
      <ul>
        {contractors.map((contractor, i) => (
          <li key={i}>{contractor.name}</li>
        ))}
      </ul>
    </Container>
  );
};

UserProfile.propTypes = {
  user: PropTypes.object,
};

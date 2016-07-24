import React from 'react';

import { Dimmer, Loader, Segment } from 'semantic-react';

export const LoadingPage = () =>
  <Segment style={{ height: '100vh' }}>
    <Dimmer active inverted>
      <Loader text size="massive">Loading...</Loader>
    </Dimmer>
  </Segment>;

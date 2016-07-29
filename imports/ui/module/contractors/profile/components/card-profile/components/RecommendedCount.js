import React from 'react';
import { Icon } from 'semantic-react';

export const RecommendedCount = ({ count }) =>
  <div>
    <Icon name="thumbs up" /> {count === 0 ? <span>No</span> : count} Recommended
  </div>;

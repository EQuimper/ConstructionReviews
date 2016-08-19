import React from 'react';
import { Icon } from 'semantic-react';

export const RecommendedCount = ({ count }) =>
  <div>
    <Icon name="heart" /> {count.length} Recommended
  </div>;

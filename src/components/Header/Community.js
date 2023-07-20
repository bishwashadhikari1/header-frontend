import React from 'react';
import { Link } from 'react-router-dom';
import communityIcon from '../../assets/community-icon-9183E8.png';  

// The Community component
const Community = () => (
  <Link to="/community">
    <img src={communityIcon} height="40" width="40" alt="Community" />
  </Link>
);

export default Community;

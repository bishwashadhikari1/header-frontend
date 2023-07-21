import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CommunityPage from './components/CommunityPage';
import ProfilePage from './components/ProfilePage';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import LoginPage from './components/LoginPage';

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/community" element={<CommunityPage />} />
    <Route path="/login" element={<ProfilePage />} />
    <Route path="/page1" element={<PageOne />} />
    <Route path="/page2" element={<PageTwo />} />
    <Route path="/login" element={<LoginPage />} />

  </Routes>
);

export default RoutesComponent;

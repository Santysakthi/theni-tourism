import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PlaceDetailsPage from '../pages/PlaceDetailsPage';
import MapExplorerPage from '../pages/MapExplorerPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PackagesPage from '../pages/PackagesPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/places/:slug" element={<PlaceDetailsPage />} />
      <Route path="/packages/:slug" element={<PackagesPage />} />
      <Route path="/map" element={<MapExplorerPage />} />
      <Route path="/packages" element={<PackagesPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRoutes;

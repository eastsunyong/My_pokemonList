import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Main, Detail, Type } from 'page';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pokemon/:id" element={<Detail />} />
        <Route path="/type/:pokemonType" element={<Type />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default Router;

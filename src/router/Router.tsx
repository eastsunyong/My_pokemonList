import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Main from 'page/Main';
import Detail from 'page/Detail';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </>
  )
}

export default Router
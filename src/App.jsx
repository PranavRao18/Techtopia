import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import QuizPage from './pages/quiz';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/quiz' element={<QuizPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

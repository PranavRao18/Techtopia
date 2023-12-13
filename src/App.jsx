import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { DarkModeProvider } from './DarkModeContext';
import QuizPage from './pages/quiz';
import News from './pages/news';

const App = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/quiz' element={<QuizPage/>} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  )
}

export default App;

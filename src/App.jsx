// App.jsx
import './SASS/_index.scss';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import CreditPage from './pages/Credit';
import Header from './components/Header/Header';
import { ThemeProvider } from './Context/ThemeContext';
import Footer from './components/Footer/Footer';
import jsonData from './data/expertise.json';
import ErrorPage from './pages/ErrorPage';
import { useRef } from 'react';

function App() {



  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage data={jsonData}/>} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/credits" element={<CreditPage/>} />
            <Route path="/*" element={<ErrorPage/>} />
          </Routes>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

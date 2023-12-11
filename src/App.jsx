import './SASS/_index.scss';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import Header from './components/Header/Header';
import { ThemeProvider } from './Context/ThemeContext';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/" element={<ProjectPage/>} />
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

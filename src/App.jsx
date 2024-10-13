import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './App.scss';
import GetResumeData from './components/GetResumeData.jsx';
import GetSharedData from './components/GetSharedData.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';

export default function App() {
  const resumeData = GetResumeData();
  const sharedData = GetSharedData();

  return (
    <Router>
      <Header
        sharedBasicInfo={sharedData.basic_info}
        resumeExperience={resumeData.experience}
      />
      <Routes>
        <Route
          exact
          path='/'
          element={<Home resumeData={resumeData} sharedData={sharedData} />}
        ></Route>
        <Route
          path='/about'
          element={
            <About
              resumeBasicInfo={resumeData.basic_info}
              portfolioData={sharedData}
            />
          }
        ></Route>
      </Routes>
      <Footer sharedBasicInfo={sharedData.basic_info} />
    </Router>
  );
}

App.propTypes = {
  resumeData: PropTypes.object,
  sharedData: PropTypes.object,
};

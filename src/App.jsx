import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import $ from 'jquery';
import './App.scss';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';

export default function App() {
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});

  const resumePath = 'resume_enus.json';
  const sharedDataPath = 'portfolio_shared_data.json';

  useEffect(() => {
    let ignore = false;
    loadExternalData(resumePath).then((result) => {
      if (!ignore) {
        setResumeData(result);
      }
    });

    loadExternalData(sharedDataPath).then((result) => {
      if (!ignore) {
        setSharedData(result);
      }
    });

    if (!ignore) {
      if (sharedData.basic_info !== undefined) {
        document.title = `${sharedData.basic_info.name}`;
      }

      return () => {
        ignore = true;
      };
    }
  }, [sharedData.basic_info]);

  function loadExternalData(path) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: path,
        dataType: 'json',
        cache: false,
        success: function (data) {
          resolve(data);
        },
        error: function (xhr, status, err) {
          reject(err);
        },
      });
    });
  }

  return (
    <Router>
      <Header sharedData={sharedData.basic_info} />
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
              sharedBasicInfo={sharedData.basic_info}
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

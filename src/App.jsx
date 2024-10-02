import  { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import $ from 'jquery';
import './App.scss';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foo: 'bar',
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage = (pickedLanguage) => {
    document.documentElement.lang = pickedLanguage;
  };

  componentDidMount = () => {
    this.loadSharedData();
    this.applyPickedLanguage(window.$primaryLanguage    );
    var resumePath = `resume_enus.json`;
    this.loadResumeFromPath(resumePath);
  };

  loadResumeFromPath = (path) => {
    $.ajax({
      url: path,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  };

  loadSharedData = () => {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${data.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  };

  render() {
    return (
        <Router>
          <Header sharedData={this.state.sharedData.basic_info} />
          <Routes>
            <Route exact path='/' element={
              <Home
              resumeData={this.state.resumeData}
              sharedData={this.state.sharedData}
              />
            }>
            </Route>
            <Route  path='/about' element={
              <About
              resumeBasicInfo={this.state.resumeData.basic_info}
              sharedBasicInfo={this.state.sharedData.basic_info}
              />            
            }>
            </Route>
          </Routes>
        <Footer
          sharedBasicInfo={this.state.sharedData.basic_info}
          applyPickedLanguage={this.applyPickedLanguage}
        />
      </Router>
    );
  }
}

export default App;

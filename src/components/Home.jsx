import React, { Component } from 'react';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <Projects
          resumeProjects={this.props.resumeData.projects}
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.props.sharedData.skills}
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.props.resumeData.experience}
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
      </div>
    );
  }
}

export default Home;

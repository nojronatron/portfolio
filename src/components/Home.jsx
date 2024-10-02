import { Component } from 'react';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';
import PropTypes from 'prop-types';

class Home extends Component {
  static propTypes = {
    resumeData: PropTypes.object,
    sharedData: PropTypes.object,
  };

  render() {
    const resumeInfo = this.props.resumeData;

    return (
      <div>
        <Projects
          resumeProjects={resumeInfo.projects}
          resumeBasicInfo={resumeInfo.basic_info}
        />
        <Skills
          sharedSkills={this.props.sharedData.skills}
          resumeBasicInfo={resumeInfo.basic_info}
        />
        <Experience
          resumeExperience={resumeInfo.experience}
          resumeBasicInfo={resumeInfo.basic_info}
        />
      </div>
    );
  }
}

export default Home;

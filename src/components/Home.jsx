import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';
import PropTypes from 'prop-types';

export default function Home({ resumeData, sharedData }) {
  const resumeInfo = resumeData;

  return (
    <article className='position-static'>
      <Projects
        resumeProjects={resumeInfo.projects}
        resumeBasicInfo={resumeInfo.basic_info}
      />
      <Skills
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeInfo.basic_info}
      />
      <Experience
        resumeExperience={resumeInfo.experience}
        resumeBasicInfo={resumeInfo.basic_info}
      />
    </article>
  );
}

Home.propTypes = {
  resumeData: PropTypes.object,
  sharedData: PropTypes.object,
};

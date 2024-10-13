import PropTypes from 'prop-types';
import GetCodeLanguageIcons from './GetCodeLanguageIcons.jsx';
import GetToolFrameworkIcons from './GetToolFrameworkIcons.jsx';

export default function Skills({ sharedSkills, resumeBasicInfo }) {
  if (resumeBasicInfo) {
    var codeSkillsSection = resumeBasicInfo.section_name.codingLanguages;
    var toolsSection = resumeBasicInfo.section_name.tools;
  }

  if (sharedSkills !== undefined) {
    var codingLanguages = sharedSkills.codingLanguages;
    var codingIcons = GetCodeLanguageIcons({ codingLanguages });
  }

  if (sharedSkills !== undefined) {
    var toolsFrameworks = sharedSkills.tools;
    var toolsIcons = GetToolFrameworkIcons({ toolsFrameworks });
  }

  return (
    <section id='skills'>
      <h1 className='section-title'>{codeSkillsSection}</h1>
      <div className='d-flex my-3 justify-content-center flex-wrap'>
        {sharedSkills && codingIcons}
      </div>

      <h1 className='section-title'>{toolsSection}</h1>
      <div className='d-flex my-3 justify-content-center flex-wrap'>
        {sharedSkills && toolsIcons}
      </div>
    </section>
  );
}

Skills.propTypes = {
  sharedSkills: PropTypes.object,
  resumeBasicInfo: PropTypes.object,
};

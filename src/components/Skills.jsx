import PropTypes from 'prop-types';
import GetCodeLanguageIcons from './GetCodeLanguageIcons.jsx';
import GetToolFrameworkIcons from './GetToolFrameworkIcons.jsx';

export default function Skills({ sharedSkills, resumeBasicInfo }) {
  if (resumeBasicInfo === undefined || sharedSkills === undefined) {
    return <section id='skills'>No info</section>;
  }

  var codingLanguages = sharedSkills.codingLanguages;
  var codingIcons = GetCodeLanguageIcons({ codingLanguages });
  var toolsFrameworks = sharedSkills.tools;
  var toolsIcons = GetToolFrameworkIcons({ toolsFrameworks });

  return (
    <section id='skills'>
      <h1 className='section-title title-text-light'>
        {resumeBasicInfo.section_name.codingLanguages}
      </h1>
      <div className='d-flex my-3 justify-content-center flex-wrap'>
        {codingIcons}
      </div>

      <h1 className='section-title title-text-light'>
        {resumeBasicInfo.section_name.tools}
      </h1>
      <div className='d-flex my-3 justify-content-center flex-wrap'>
        {toolsIcons}
      </div>
    </section>
  );
}

Skills.propTypes = {
  sharedSkills: PropTypes.object,
  resumeBasicInfo: PropTypes.object,
};

import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

export default function Skills({ sharedSkills, resumeBasicInfo }) {
  if (sharedSkills && resumeBasicInfo) {
    var codeSkillsSection = resumeBasicInfo.section_name.codingLanguages;
    var toolsSection = resumeBasicInfo.section_name.tools;
  }

  if (sharedSkills !== undefined) {
    var codingIcons = sharedSkills.codingLanguages.map(function (
      codeLang,
      idx
    ) {
      return (
        <div className='mx-3 text-center skills-tile' key={idx}>
          <Icon icon={codeLang.icon} className='skill-icon' />
          <p className='skill-icon-text'>{codeLang.name}</p>
        </div>
      );
    });
  }

  if (sharedSkills !== undefined) {
    var toolsIcons = sharedSkills.tools.map(function (tool, idx) {
      return (
        <div className='mx-3 text-center skills-tile' key={idx}>
          <Icon icon={tool.icon} className='skill-icon' />
          <p className='skill-icon-text'>{tool.name}</p>
        </div>
      );
    });
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

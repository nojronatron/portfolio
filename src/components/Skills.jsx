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
        <li
          className='mx-3'
          key={idx}
          style={{
            display: 'inline-block',
          }}
        >
          <div className='text-center skills-tile'>
            <Icon
              icon={codeLang.icon}
              style={{
                display: 'block',
                fontSize: '2em',
                margin: '0 auto',
              }}
            />
            <p style={{ fontSize: '1em' }}>{codeLang.name}</p>
          </div>
        </li>
      );
    });
  }

  if (sharedSkills !== undefined) {
    var toolsIcons = sharedSkills.tools.map(function (tool, idx) {
      return (
        <li className='mx-3' key={idx} style={{ display: 'inline-block' }}>
          <div className='text-center skills-tile'>
            <Icon
              icon={tool.icon}
              style={{ display: 'block', fontSize: '2em', margin: '0 auto' }}
            />
            <p style={{ fontSize: '1em' }}>{tool.name}</p>
          </div>
        </li>
      );
    });
  }

  return (
    <section id='skills'>
      <div className='col-md-12'>
        <div className='col-md-12'>
          <h1 className='section-title'>
            <span className='text-white'>{codeSkillsSection}</span>
          </h1>
        </div>
        <div className='col-md-12 text-center'>
          <ul className='list-inline mx-auto skill-icon'>
            {sharedSkills && codingIcons}
          </ul>
        </div>
      </div>

      <div className='col-md-12'>
        <div className='col-md-12'>
          <h1 className='section-title'>
            <span className='text-white'>{toolsSection}</span>
          </h1>
        </div>
        <div className='col-md-12 text-center'>
          <ul className='list-inline mx-auto skill-icon'>
            {sharedSkills && toolsIcons}
          </ul>
        </div>
      </div>
    </section>
  );
}

Skills.propTypes = {
  sharedSkills: PropTypes.object,
  resumeBasicInfo: PropTypes.object,
};

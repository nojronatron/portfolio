import { Component } from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

class Skills extends Component {
  static propTypes = {
    sharedSkills: PropTypes.object,
    resumeBasicInfo: PropTypes.object,
  };

  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var codeSkillsSection =
        this.props.resumeBasicInfo.section_name.codingLanguages;
      var toolsSection = this.props.resumeBasicInfo.section_name.tools;
    }

    if (this.props.sharedSkills !== undefined) {
      var codingIcons = this.props.sharedSkills.codingLanguages.map(function (
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

    if (this.props.sharedSkills !== undefined) {
      var toolsIcons = this.props.sharedSkills.tools.map(function (tool, idx) {
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
              {this.props.sharedSkills && codingIcons}
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
              {this.props.sharedSkills && toolsIcons}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;

import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import html5Icon from '@iconify/icons-logos/html-5';
import css3Icon from '@iconify/icons-logos/css-3';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import javaIcon from '@iconify/icons-logos/java';
import dotnetIcon from '@iconify/icons-logos/dotnet';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import intellijIcon from '@iconify/icons-logos/intellij-idea';
import vscodeIcon from '@iconify/icons-logos/visual-studio-code';
import gitIcon from '@iconify/icons-logos/git';
import githubIcon from '@iconify/icons-logos/github-icon';
import mongoDbIcon from '@iconify/icons-logos/mongodb';
import visualStudioIcon from '@iconify/icons-logos/visual-studio';
import netlifyIcon from '@iconify/icons-logos/netlify';
import azureIcon from '@iconify/icons-logos/azure';
import mssqlIcon from '@iconify/icons-logos/mysql';
import trelloIcon from '@iconify/icons-logos/trello';

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
    }

    const listOfSkills = [
      { icon: html5Icon, name: 'HTML5' },
      { icon: css3Icon, name: 'CSS3' },
      { icon: javascriptIcon, name: 'JavaScript' },
      { icon: nodejsIcon, name: 'Node.js' },
      { icon: reactIcon, name: 'React' },
      { icon: javaIcon, name: 'Java' },
      { icon: dotnetIcon, name: '.NET' },
      { icon: gitIcon, name: 'Git' },
      { icon: vscodeIcon, name: 'VS Code' },
      { icon: visualStudioIcon, name: 'VisualStudio' },
      { icon: intellijIcon, name: 'IDEA' },
      { icon: trelloIcon, name: 'Trello' },
      { icon: githubIcon, name: 'GitHub' },
      { icon: netlifyIcon, name: 'Netlify' },
      { icon: azureIcon, name: 'Azure' },
      { icon: mongoDbIcon, name: 'MongoDB' },
      { icon: mssqlIcon, name: 'SQL' },
    ];

    const skillIcons = listOfSkills.map(function (skill, i) {
      return (
        <li
          className='mx-3'
          key={i}
          style={{
            display: 'inline-block',
          }}
        >
          <div className='text-center skills-tile'>
            <Icon
              icon={skill.icon}
              style={{
                display: 'block',
                fontSize: '1.8em',
                margin: '0 auto',
              }}
            />
            <p style={{ fontSize: '1em' }}>{skill.name}</p>
          </div>
        </li>
      );
    });

    return (
      <section id='skills'>
        <div className='col-md-12'>
          <div className='col-md-12'>
            <h1 className='section-title'>
              <span className='text-white'>{sectionName}</span>
            </h1>
          </div>
          <div className='col-md-12 text-center'>
            <ul className='list-inline mx-auto skill-icon'>{skillIcons}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;

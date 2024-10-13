import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

export default function GetToolFrameworkIcons({ toolsFrameworks }) {
  return toolsFrameworks.map(function (tool, idx) {
    return (
      <div className='mx-3 text-center skills-tile' key={idx}>
        <Icon icon={tool.icon} className='skill-icon' />
        <p className='skill-icon-text'>{tool.name}</p>
      </div>
    );
  });
}

GetToolFrameworkIcons.propTypes = {
  toolsFrameworks: PropTypes.array,
};

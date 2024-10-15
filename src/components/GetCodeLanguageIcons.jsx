import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

export default function GetCodeLanguageIcons({ codingLanguages }) {
  return codingLanguages.map(function (codeLang, idx) {
    return (
      <div className='text-center skills-tile' key={idx}>
        <Icon icon={codeLang.icon} className='skill-icon' />
        <p className='skill-icon-text'>{codeLang.name}</p>
      </div>
    );
  });
}

GetCodeLanguageIcons.propTypes = {
  codingLanguages: PropTypes.array,
};

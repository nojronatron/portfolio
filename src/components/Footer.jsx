import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

export default function Footer({ sharedBasicInfo }) {
  const revision = '20 May 2025';

  if (sharedBasicInfo) {
    var networks = sharedBasicInfo.social.map(function (network) {
      return (
        <div key={network.name} className='m-4'>
          <a href={network.url} target='_blank' rel='noopener noreferrer'>
            <Icon icon={network.class} className='footer-devicons'></Icon>
          </a>
        </div>
      );
    });

    return (
      <footer
        id='foot'
        className='d-flex justify-content-between p-2 align-items-center'
      >
        <div className='d-flex justify-content align-items-center'>
          {networks}
          <div className='m-4'>
            <a
              href='https://github.com/nojronatron'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='jr-software-logo'
                src='images/jrsoftware-logo-128x128.png'
                alt='JR Software'
                aria-label='Nojronatrons GitHub Profile'
              />
            </a>
          </div>
        </div>
        <p className='m-4 revision-text'>
          Revision {revision}, {sharedBasicInfo ? sharedBasicInfo.name : '???'}
        </p>
      </footer>
    );
  }
}

Footer.propTypes = {
  sharedBasicInfo: PropTypes.object,
};

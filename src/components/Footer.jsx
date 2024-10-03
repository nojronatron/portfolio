import PropTypes from 'prop-types';

export default function Footer({ sharedBasicInfo }) {
  const revision = '3 October 2024';

  if (sharedBasicInfo) {
    var networks = sharedBasicInfo.social.map(function (network) {
      return (
        <span key={network.name} className='m-4'>
          <a href={network.url} target='_blank' rel='noopener noreferrer'>
            <i className={network.class}></i>
          </a>
        </span>
      );
    });

    return (
      <footer>
        <div className='d-flex flex-row justify-content-around'>
          <div>{networks}</div>
          <img
            src='images/jrsoftware-logo-128x128.png'
            alt='JR Software'
            height='20em'
          />
          <div>
            Revision {revision}
            {', '}
            {sharedBasicInfo ? sharedBasicInfo.name : '???'}
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  sharedBasicInfo: PropTypes.object,
};

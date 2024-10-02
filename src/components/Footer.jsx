import { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  static propTypes = {
    sharedBasicInfo: PropTypes.object,
    applyPickedLanguage: PropTypes.func,
  };

  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className='m-4'>
            <a href={network.url} target='_blank' rel='noopener noreferrer'>
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col social-links'>{networks}</div>
            <div className='col'>
              <div
                onClick={() =>
                  this.props.applyPickedLanguage(
                    window.$primaryLanguage,
                    window.$secondaryLanguageIconId
                  )
                }
                style={{ display: 'inline' }}
              >
                <span
                  className='iconify language-icon mr-5'
                  data-icon='twemoji-flag-for-flag-united-states'
                  data-inline='false'
                  id={window.$primaryLanguageIconId}
                ></span>
              </div>
            </div>
            <div className='col'>
              <div className='copyright py-3 text-center'>
                <div className='container'>
                  Revision {' October 2024 - '}
                  {this.props.sharedBasicInfo
                    ? this.props.sharedBasicInfo.name
                    : '???'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

import { useState } from 'react';
import Switch from 'react-switch';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import '../scss/header-iconify-svgs.scss';

export default function Header({ sharedBasicInfo }) {
  const [checked, setChecked] = useState(false);

  if (sharedBasicInfo) {
    const onThemeSwitchChange = () => {
      if (checked == true) {
        setChecked(false);
      } else {
        setChecked(true);
      }

      setTheme();
    };

    const setTheme = () => {
      var dataThemeAttribute = 'data-theme';
      var body = document.body;
      var newTheme =
        body.getAttribute(dataThemeAttribute) === 'dark' ? 'light' : 'dark';
      body.setAttribute(dataThemeAttribute, newTheme);
    };

    const displayTitles = sharedBasicInfo.titles.map((title, idx) => {
      return (
        <div key={idx} className='header-sub-title'>
          {title}
        </div>
      );
    });

    return (
      <header id='home' className='pb-2'>
        <a
          href='https://github.com/nojronatron/portfolio'
          target='_blank'
          rel='noreferrer'
          className='github-corner'
          aria-label='View source on GitHub'
        >
          <svg
            width='90'
            height='90'
            viewBox='0 0 250 250'
            style={{
              fill: '#151513',
              color: '#fff',
              position: 'fixed',
              top: 0,
              left: 0,
              transform: 'scale(-1, 1)',
              zIndex: 9999,
            }}
            aria-hidden='true'
          >
            <path d='M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z'></path>
            <path
              d='M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2'
              fill='currentColor'
              style={{ transformOrigin: '130px 106px' }}
              className='octo-arm'
            ></path>
            <path
              d='M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z'
              fill='currentColor'
              className='octo-body'
            ></path>
          </svg>
        </a>
        <Nav
          className='d-flex justify-content-end align-items-center mx-2 position-fixed top-0 w-100'
          activeKey='/home'
        >
          <Nav.Item>
            <LinkContainer to='/'>
              <Nav.Link href='/'>Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to='/about'>
              <Nav.Link eventKey='about'>About</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <Switch
              checked={checked}
              onChange={onThemeSwitchChange}
              offColor='#222222'
              onColor='#555500'
              onHandleColor='#888888'
              offHandleColor='#aaaaaa'
              width={90}
              height={40}
              uncheckedIcon={<span className='noto--crescent-moon'></span>}
              checkedIcon={<span className='noto-v1--sun'></span>}
              id='icon-switch'
            />
          </Nav.Item>
        </Nav>
        <div className='mouse-arrow-only'>
          <img
            className='header-image'
            src='images/jon-happy-shot-apr-22.jpg'
            alt='Jon smiling while sitting at his computer desk'
          />
          <h1 className='mb-0'>{sharedBasicInfo.name}</h1>
          <div className='d-flex justify-content-evenly flex-wrap header-sub-titles'>
            {displayTitles}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  sharedBasicInfo: PropTypes.object,
};

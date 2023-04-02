import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import reactIcon from '@iconify/icons-logos/react';
import dotnetIcon from '@iconify/icons-logos/dotnet';
import javaIcon from '@iconify/icons-logos/java';

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = 'images/' + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id='about'>
        <div className='col-md-12'>
          <h1 style={{ color: 'black' }}>
            <span>{sectionName}</span>
          </h1>
          <div className='row center mx-auto mb-5'>
            <div className='col-md-4 mb-5'>
              <div>
                <img
                  height='400px'
                  width='400px'
                  src={profilepic}
                  alt='Jon hiking near Mt.Rainier in Washington State.'
                />
              </div>
              <span style={{ cursor: 'auto' }}>
                <Icon
                  icon={nodejsIcon}
                  style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                />
                <Icon
                  icon={reactIcon}
                  style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                />
                <Icon
                  icon={dotnetIcon}
                  style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                />
                <Icon
                  icon={javaIcon}
                  style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                />
              </span>
            </div>

            <div className='col-md-8 center'>
              <div className='col-md-10'>
                <div className='card'>
                  <div className='card-header'>
                    <span
                      className='iconify'
                      data-icon='emojione:red-circle'
                      data-inline='false'
                    ></span>{' '}
                    &nbsp;{' '}
                    <span
                      className='iconify'
                      data-icon='twemoji:yellow-circle'
                      data-inline='false'
                    ></span>{' '}
                    &nbsp;{' '}
                    <span
                      className='iconify'
                      data-icon='twemoji:green-circle'
                      data-inline='false'
                    ></span>
                  </div>
                  <div
                    className='card-body font-trebuchet text-justify ml-3 mr-3'
                    style={{
                      height: 'auto',
                      fontSize: '132%',
                      lineHeight: '200%',
                    }}
                  >
                    <br />
                    <span className='wave'>{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

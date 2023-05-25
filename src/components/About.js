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
      // var about = this.props.resumeBasicInfo.description;
      var about = this.props.resumeBasicInfo.description.map((element) => {
        return <div>{element}</div>;
      });
    }

    return (
      <section id='about'>
        <div className='col-md-12'>
          <h1 style={{ color: 'black' }}>
            <span>{sectionName}</span>
          </h1>
          <div className='row mx-auto mb-5'>
            <div className='col-md-12 center'>
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
                  className='card-body font-trebuchet text-justify ml-3 mr-3 clearfix'
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
                  <img
                    width='360px'
                    src={profilepic}
                    alt='Image of Jon hiking near Mt.Rainier in Washington State, USA.'
                    className='col-md-4 float-md-end mb-3 ms-md-3 rounded-4'
                    style={{
                      boxShadow: '8px 10px 5px 0px #a59753',
                    }}
                  />

                  {about}
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

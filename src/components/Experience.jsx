import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';

export default function Experience({ resumeExperience, resumeBasicInfo }) {
  if (resumeExperience && resumeBasicInfo) {
    var sectionName = resumeBasicInfo.section_name.experience;

    var work = resumeExperience.map(function (work, idx) {
      const technologies = work.technologies;
      const mainTechnologies = work.mainTech;

      var mainTech = mainTechnologies.map((technology, jdx) => {
        return (
          <Badge pill className='main-badge mr-2 mb-2' key={jdx}>
            {technology}
          </Badge>
        );
      });

      var tech = technologies.map((technology, idx) => {
        return (
          <Badge pill className='experience-badge mr-2 mb-2' key={idx}>
            {technology}
          </Badge>
        );
      });

      return (
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date={work.years}
          iconStyle={{
            background: '#AE944F',
            color: '#fff',
            textAlign: 'center',
          }}
          icon={<div className='fab fa-angular experience-icon'></div>}
          key={idx}
        >
          <div>{mainTech}</div>

          <h3 className='vertical-timeline-element-title'>{work.title}</h3>
          <h4 className='vertical-timeline-element-subtitle'>{work.company}</h4>
          <div style={{ textAlign: 'left', marginTop: '15px' }}>{tech}</div>
        </VerticalTimelineElement>
      );
    });
  }

  return (
    <section id='resume' className='pb-5'>
      <div className='col-md-12 mx-auto'>
        <div className='col-md-12'>
          <h1 className='section-title' style={{ color: 'black' }}>
            <span className='text-black' style={{ textAlign: 'center' }}>
              {sectionName}
            </span>
          </h1>
        </div>
      </div>
      <div className='col-md-8 mx-auto'>
        <VerticalTimeline>{work}</VerticalTimeline>
      </div>
    </section>
  );
}

Experience.propTypes = {
  resumeExperience: PropTypes.array,
  resumeBasicInfo: PropTypes.object,
};

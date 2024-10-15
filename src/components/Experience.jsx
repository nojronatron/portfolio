import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PropTypes from 'prop-types';

export default function Experience({ resumeExperience, resumeBasicInfo }) {
  if (resumeExperience && resumeBasicInfo) {
    var sectionName = resumeBasicInfo.section_name.experience;

    var work = resumeExperience.map(function (work, idx) {
      const technologies = work.technologies;
      const mainTechnologies = work.mainTech;

      var mainTech = mainTechnologies.map((technology, jdx) => {
        return (
          <div key={jdx} className='experience-badge'>
            {technology}
          </div>
        );
      });

      var tech = technologies.map((technology, kdx) => {
        return (
          <div key={kdx} className='experience-badge'>
            {technology}
          </div>
        );
      });

      return (
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date={work.years}
          icon={<div className='fab fa-angular experience-icon'></div>}
          key={idx}
        >
          <div className='d-flex justify-content-start flex-wrap'>
            {mainTech}
          </div>
          <h3>{work.title}</h3>
          <h4>{work.company}</h4>
          <div className='d-flex justify-content-start flex-wrap'>{tech}</div>
        </VerticalTimelineElement>
      );
    });
  }

  return (
    <section id='resume'>
      <h1 className='section-title'>{sectionName}</h1>
      <VerticalTimeline>
        <div className='work-experience'>{work}</div>
      </VerticalTimeline>
    </section>
  );
}

Experience.propTypes = {
  resumeExperience: PropTypes.array,
  resumeBasicInfo: PropTypes.object,
};

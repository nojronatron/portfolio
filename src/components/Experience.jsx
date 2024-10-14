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
    var work = resumeExperience.map(function (work, i) {
      const technologies = work.technologies;
      const mainTechnologies = work.mainTech;

      var mainTech = mainTechnologies.map((mainTechnology, j) => {
        return (
          <Badge pill className='main-badge mr-2 mb-2' key={j}>
            {mainTechnology}
          </Badge>
        );
      });

      var tech = technologies.map((technology, k) => {
        return (
          <Badge pill className='experience-badge mr-2 mb-2' key={k}>
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
            fontSize: '2em',
          }}
          icon={<i className='fab fa-angular experience-icon'></i>}
          key={i}
        >
          <div>{mainTech}</div>

          <h3 className='vertical-timeline-element-title'>{work.title}</h3>
          <h4 className='vertical-timeline-element-subtitle'>{work.company}</h4>
          <div>{tech}</div>
        </VerticalTimelineElement>
      );
    });
  }

  return (
    <section id='resume'>
      <h1 className='section-title'>{sectionName} </h1>
      <VerticalTimeline>
        <div className='workExperience'>{work}</div>
        <VerticalTimelineElement
          iconStyle={{
            background: '#AE944F',
            color: '#fff',
            textAlign: 'center',
            fontSize: '1.8em',
          }}
          icon={
            <div className='fas fa-hourglass-start mx-auto experience-icon'></div>
          }
        />
      </VerticalTimeline>
    </section>
  );
}

Experience.propTypes = {
  resumeExperience: PropTypes.array,
  resumeBasicInfo: PropTypes.object,
};

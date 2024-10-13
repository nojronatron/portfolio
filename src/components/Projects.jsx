import { useState } from 'react';
import ProjectDetailsModal from './ProjectDetailsModal.jsx';
import PropTypes from 'prop-types';

export default function Projects({ resumeProjects, resumeBasicInfo }) {
  const [state, setState] = useState({ deps: {}, detailsModalShow: false });

  let setDetailsModalShow = (data) => {
    setState({ deps: data, detailsModalShow: true });
  };

  let detailsModalClose = () => setState({ deps: {}, detailsModalShow: false });

  var sectionName = resumeBasicInfo
    ? resumeBasicInfo.section_name.projects
    : ['section name missing'];

  // resumeProjects or resumeBasicInfo are empty on first render so no 'else' condition is needed
  if (
    Array.isArray(resumeProjects) &&
    resumeProjects.length > 0 &&
    resumeBasicInfo
  ) {
    var projects = resumeProjects.map(function (projects) {
      return (
        <div className='col-sm-12 col-md-6 col-lg-4' key={projects.title}>
          <span className='portfolio-item d-block'>
            <div className='foto' onClick={() => setDetailsModalShow(projects)}>
              <div>
                <img
                  src={projects.images[0]}
                  alt='projectImages'
                  width='100%'
                />
                <span className='project-date'>{projects.startDate}</span>
                <br />
                <p className='project-title-settings mt-3'>{projects.title}</p>
              </div>
            </div>
          </span>
        </div>
      );
    });
  }

  return (
    <section id='portfolio'>
      <div className='col-md-12'>
        <h1 className='section-title'>
          <span>{sectionName}</span>
        </h1>
        <div className='col-md-12 mx-auto'>
          <div className='row mx-auto'>{projects}</div>
        </div>
        <ProjectDetailsModal
          propsShow={state.detailsModalShow}
          propsOnHide={detailsModalClose}
          propsData={state.deps}
        />
      </div>
    </section>
  );
}

Projects.propTypes = {
  resumeProjects: PropTypes.array,
  resumeBasicInfo: PropTypes.object,
};

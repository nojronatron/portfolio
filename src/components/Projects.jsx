import { Component } from 'react';
import ProjectDetailsModal from './ProjectDetailsModal.jsx';
import PropTypes from 'prop-types';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  static propTypes = {
    resumeProjects: PropTypes.array,
    resumeBasicInfo: PropTypes.object,
  };

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className='col-sm-12 col-md-6 col-lg-4'
            key={projects.title}
            style={{ cursor: 'pointer' }}
          >
            <span className='portfolio-item d-block'>
              <div className='foto' onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt='projectImages'
                    width='100%'
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: 'relative',
                    }}
                  />
                  <span className='project-date'>{projects.startDate}</span>
                  <br />
                  <p className='project-title-settings mt-3'>
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    } else {
      console.log('Projects section and/or Resume Basic Info missing!');
    }

    return (
      <section id='portfolio'>
        <div className='col-md-12'>
          <h1 className='section-title' style={{ color: 'black' }}>
            <span>{sectionName}</span>
          </h1>
          <div className='col-md-12 mx-auto'>
            <div className='row mx-auto'>{projects}</div>
          </div>
          <ProjectDetailsModal
            propsShow={this.state.detailsModalShow}
            propsOnHide={detailsModalClose}
            propsData={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;

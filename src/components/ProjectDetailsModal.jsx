import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';

export default function ProjectDetailsModal({
  propsShow,
  propsOnHide,
  propsData,
}) {
  if (propsData) {
    const technologies = propsData.technologies;
    const images = propsData.images;
    var title = propsData.title;
    var description = propsData.description;
    var url = propsData.url;
    if (propsData.technologies) {
      var tech = technologies.map((icons, i) => {
        return (
          <li className='list-inline-item mx-3' key={i}>
            <span>
              <div className='text-center'>
                <i className={icons.class} style={{ fontSize: '300%' }}>
                  <p className='text-center' style={{ fontSize: '30%' }}>
                    {icons.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      if (propsData.images) {
        var img = images.map((elem, i) => {
          return <div key={i} data-src={elem} />;
        });
      }
    }
  }

  return (
    <Modal
      show={propsShow}
      onHide={propsOnHide}
      data={propsData}
      size='xl'
      aria-labelledby='projectModalTitle'
      centered
      className='modal-inside'
    >
      <span onClick={propsOnHide} className='modal-close'>
        <i className='fas fa-times fa-3x close-icon'></i>
      </span>
      <div className='col-md-12'>
        <div className='col-md-10 mx-auto' style={{ paddingBottom: '50px' }}>
          <div className='slider-tab'>
            <span
              className='iconify slider-iconfiy'
              data-icon='emojione:red-circle'
              data-inline='false'
              style={{ marginLeft: '5px' }}
            ></span>{' '}
            &nbsp;{' '}
            <span
              className='iconify slider-iconfiy'
              data-icon='twemoji:yellow-circle'
              data-inline='false'
            ></span>{' '}
            &nbsp;{' '}
            <span
              className='iconify slider-iconfiy'
              data-icon='twemoji:green-circle'
              data-inline='false'
            ></span>
          </div>
          <AwesomeSlider className='slider-image'>{img}</AwesomeSlider>
        </div>
        <div className='col-md-10 mx-auto'>
          <h3 id='projectModalTitle' style={{ padding: '5px 5px 0 5px' }}>
            {title}
            {url ? (
              <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='link-href'
              >
                <i
                  className='fas fa-external-link-alt'
                  style={{ marginLeft: '10px' }}
                ></i>
              </a>
            ) : null}
          </h3>
          <p className='modal-description'>{description}</p>
          <div className='col-md-12 text-center'>
            <ul className='list-inline mx-auto'>{tech}</ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}

ProjectDetailsModal.propTypes = {
  propsShow: PropTypes.bool,
  propsOnHide: PropTypes.func,
  propsData: PropTypes.object,
};

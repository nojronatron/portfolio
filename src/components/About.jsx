import GetCodeLanguageIcons from './GetCodeLanguageIcons';
import PropTypes from 'prop-types';

export default function About({ resumeBasicInfo, portfolioData }) {
  if (resumeBasicInfo !== undefined) {
    var sectionName = resumeBasicInfo.section_name.about;

    var about = resumeBasicInfo.description.map((element, idx) => {
      return <div key={idx}>{element}</div>;
    });

    if (portfolioData !== undefined) {
      var profilepic = 'images/' + portfolioData.basic_info.image;
      var codingLanguages = portfolioData.skills.codingLanguages;
      var codingIcons = GetCodeLanguageIcons({ codingLanguages });
    }

    return (
      <article id='about'>
        <div className='card'>
          <div className='card-header'>
            <h1 className='section-title'>{sectionName}</h1>
          </div>
          <div className='card-body'>
            <img
              src={profilepic}
              alt='Jon hiking near Mt.Rainier in Washington State, USA.'
              className='rounded-4 profile-pic float-end'
            />
            {about}
          </div>
          <div className='card-footer d-flex my-3 justify-content-center flex-wrap'>
            {codingIcons}
          </div>
        </div>
      </article>
    );
  }
}

About.propTypes = {
  resumeBasicInfo: PropTypes.object,
  portfolioData: PropTypes.object,
};

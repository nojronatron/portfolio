import GetCodeLanguageIcons from './GetCodeLanguageIcons';
import PropTypes from 'prop-types';

export default function About({ resumeBasicInfo, portfolioData }) {
  if (resumeBasicInfo !== undefined) {
    var sectionName = resumeBasicInfo.section_name.about;
    var hello = resumeBasicInfo.description_header;
    var about = resumeBasicInfo.description.map((element, idx) => {
      return <div key={idx}>{element}</div>;
    });

    if (portfolioData !== undefined) {
      var profilepic = 'images/' + portfolioData.basic_info.image;
      var codingLanguages = portfolioData.skills.codingLanguages;
      var codingIcons = GetCodeLanguageIcons({ codingLanguages });
    }

    return (
      <section id='about'>
        <div className='card rounded-4'>
          <div className='card-header rounded-top-4'>
            <h1>{sectionName}</h1>
          </div>
          <div className='card-body text-justify '>
            <br />
            <span className='wave'>{hello} :) </span>
            <br />
            <br />
            <img
              width='300px'
              src={profilepic}
              alt='Jon hiking near Mt.Rainier in Washington State, USA.'
              className='col-md-4 float-md-end mb-3 ms-md-3 rounded-4 profile-pic'
            />

            {about}
          </div>
          <div className='card-footer d-flex justify-content-center'>
            {codingIcons}
          </div>
        </div>
      </section>
    );
  }
}

About.propTypes = {
  resumeBasicInfo: PropTypes.object,
  portfolioData: PropTypes.object,
};

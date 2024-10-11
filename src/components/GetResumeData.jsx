import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import $ from 'jquery';

export default function GetResumeData() {
  const [data, setData] = useState({});

  useEffect(() => {
    $.ajax({
      url: 'resume_enus.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        setData(data);
        document.title = `${data.basic_info.name}`;
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }, []);

  return data;
}

GetResumeData.propTypes = {
  data: PropTypes.object,
};

import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import $ from 'jquery';

export default function GetSharedData() {
  const [data, setData] = useState({});

  useEffect(() => {
    $.ajax({
      url: 'portfolio_shared_data.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        setData(data);
      },
      error: function (xhr, status, err) {
        console.error(err);
        alert(err);
      },
    });
  }, []);

  return data;
}

GetSharedData.propTypes = {
  data: PropTypes.object,
};

import React from 'react';
import PropTypes from 'prop-types';


const SingleEntry = ({ entry }) => (
  <div className="card mb-5">
    <div className="container">
      <h4 className="title"><b>{entry.title}</b></h4>
      <p>{entry.description}</p>
    </div>
  </div>
);

SingleEntry.propTypes = {
  entry: PropTypes.array.isRequired,
};

export default SingleEntry;

/**
 * External Dependencies
 */
import * as React from 'react';
import PropTypes  from 'prop-types';

const ArchiveTitle = (props) => {
  return (
    <div className="archive-title">
      { props.children }
    </div>
  );
};

ArchiveTitle.propTypes = {
  children: PropTypes.node.isRequired
}

export default ArchiveTitle;

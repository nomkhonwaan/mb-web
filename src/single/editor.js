/**
 * External Dependencies
 */
import * as React from 'react';
import PropTypes  from 'prop-types';
 
const Editor = (props) => {
  return (
    <div className="single-editor">
    </div>
  );
};

Editor.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string
};

export default Editor;

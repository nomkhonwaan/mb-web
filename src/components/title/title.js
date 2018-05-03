/**
 * External Dependencies
 */
import * as React from 'react';
import Helmet     from 'react-helmet';
import PropTypes  from 'prop-types';

const Title = (props) => {
  return (
    <Helmet>
      <title>{ props.text }{ props.separator || ' - ' }{ props.suffix || 'Trust me I\'m Petdo' }</title>
    </Helmet>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  separator: PropTypes.string,
  suffix: PropTypes.string
};

export default Title;

/**
 * External Dependencies
 */
import * as React from 'react';
import Helmet     from 'react-helmet';

/**
 * Override document title with default suffix and separator
 * 
 * @param {string}      title     Document title
 * @param {string}      suffix    A suffix name of the document title
 * @param {string}      separator A separator between document title and suffix
 * @returns {ReactNode}
 */
function documentTitle(title, suffix = 'Trust me I\'m Petdo', separator = ' - ') {
  return (
    <Helmet>
      <title>{ title }{ separator }{ suffix }</title>
    </Helmet>
  )
}

export default documentTitle;

/**
 * External Dependencies
 */

import * as React             from 'react';
import PropTypes              from 'prop-types';

/**
 * Internal Dependencies
 */
import { ArchiveTitle, Post } from '../components';

const LatestUpdatedCategory = (props) => {
  return (
    <div className="_wide">

      <ArchiveTitle>
        { props.name }
      </ArchiveTitle>

      <div className="_flex">
        {
          props.latestPublishedPosts.map((item, key) => (
            <Post
              { ...item }
              key={ key }
              size="small"
            />
          ))
        }
      </div>

    </div>
  )
};

LatestUpdatedCategory.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  latestPublishedPosts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string,
      link: PropTypes.string,
      status: PropTypes.string.isRequired,
      html: PropTypes.string,
      author: PropTypes.shape({
        displayName: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
      }).isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string,
      publishedAt: PropTypes.string,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired
        })
      ),
      categories: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired
        })
      )
    }).isRequired
  ).isRequired
};

export default LatestUpdatedCategory;

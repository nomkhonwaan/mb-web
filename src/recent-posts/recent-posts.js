/**
 * External Dependencies
 */
import * as React                     from 'react';
import { connect }                    from 'react-redux';
import { Link }                       from 'react-router-dom';
import PropTypes                      from 'prop-types';

/**
 * Internal Dependencies
 */
import LatestUpdatedCategory          from './latest-updated-category';
import { ArchiveTitle, Button, Post } from '../components';
import { documentTitle }              from '../utils';

export const RecentPosts = (props) => {
  return (
    <div className="recent-posts _flex _flex-direction-column _flex-horizontal-align-center">

      { documentTitle('Recent Posts') }
      
      <div className="_narrow">
        <ArchiveTitle>
          Recent Posts
        </ArchiveTitle>

        {
          props.latestPublishedPosts.map((item, key) => (
            <Post
              { ...item }
              key={ key }
              size="medium"
            />
          ))
        }

        <div className="_flex">

          <Button className="older-posts-button _flex-right">
            <Link to="" className="_color-inherit _text-undecorated">
              Older Posts
            </Link>
          </Button>
          
        </div>

      </div>

      {
        props.latestUpdatedCategories.map((item, key) => (
          <LatestUpdatedCategory
            { ...item }
            key={ key }
          />
        ))
      }

    </div>
  );
};

RecentPosts.propTypes = {
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
  ).isRequired,
  latestUpdatedCategories: PropTypes.arrayOf(
    PropTypes.shape({
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
    }).isRequired
  ).isRequired
};

export default connect(
  (state, ownProps) => {
    return {
      ...ownProps,
      latestPublishedPosts: state.recentPosts.latestPublishedPosts,
      latestUpdatedCategories: state.recentPosts.latestUpdatedCategories
    };
  }
)(RecentPosts);

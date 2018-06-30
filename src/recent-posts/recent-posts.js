/**
 * External Dependencies
 */
import _                               from 'lodash';
import * as React                      from 'react';
import { connect }                     from 'react-redux';
import { Link }                        from 'react-router-dom';
import PropTypes                       from 'prop-types';

/**
 * Internal Dependencies
 */
import LatestUpdatedCategory           from './latest-updated-category';
import { Button, Header, Post, Title } from '../components';
import { fetchLatestPublishedPosts }   from '../redux/modules/recent-posts';

export class RecentPosts extends React.Component {
  
  componentWillMount() {
    this.props.fetchLatestPublishedPosts();
  }

  render() {
    if (_.isEmpty(this.props.latestPublishedPosts)) {
      return 'Loading...';
    }

    return (
      <div className="recent-posts _flex _flex-direction-column _flex-horizontal-align-center">

        <Title text="Recent Posts" />
        
        <div className="_narrow">
          <Header displayStyle="category">
            Recent Posts
          </Header>
  
          {
              _.isEmpty(this.props.latestPublishedPosts) ? null : this.props.latestPublishedPosts.data.map(
              (item, key) => (
                <Post
                  { ...item }
                  key={ key }
                  size="medium"
                />
              )
            )
          }
  
          <div className="_flex">
  
            <Button className="older-posts-button _flex-right">
              <Link to="" className="_color-inherit _text-undecorated">
                Older Posts
              </Link>
            </Button>
            
          </div>
  
        </div>
  
        {/* {
          this.props.latestUpdatedCategories.map((item, key) => (
            <LatestUpdatedCategory
              { ...item }
              key={ key }
            />
          ))
        } */}
  
      </div>
    );
  }

}

RecentPosts.propTypes = {
  latestPublishedPosts: PropTypes.shape({
    links: PropTypes.shape({
      self: PropTypes.string.isRequired,
      next: PropTypes.string,
      previous: PropTypes.string
    }).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)).isRequired,
    // included: PropTypes.arrayOf(
    //   PropTypes.oneOfType([ ])
    // ).isRequired
  }).isRequired
  // latestUpdatedCategories: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     name: PropTypes.string.isRequired,
  //     slug: PropTypes.string.isRequired,
  //     link: PropTypes.string.isRequired,
  //     latestPublishedPosts: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         title: PropTypes.string.isRequired,
  //         slug: PropTypes.string,
  //         link: PropTypes.string,
  //         status: PropTypes.string.isRequired,
  //         html: PropTypes.string,
  //         author: PropTypes.shape({
  //           displayName: PropTypes.string.isRequired,
  //           avatarUrl: PropTypes.string.isRequired,
  //           link: PropTypes.string.isRequired
  //         }).isRequired,
  //         createdAt: PropTypes.string.isRequired,
  //         updatedAt: PropTypes.string,
  //         publishedAt: PropTypes.string,
  //         tags: PropTypes.arrayOf(
  //           PropTypes.shape({
  //             name: PropTypes.string.isRequired,
  //             slug: PropTypes.string.isRequired,
  //             link: PropTypes.string.isRequired
  //           })
  //         ),
  //         categories: PropTypes.arrayOf(
  //           PropTypes.shape({
  //             name: PropTypes.string.isRequired,
  //             slug: PropTypes.string.isRequired,
  //             link: PropTypes.string.isRequired
  //           })
  //         )
  //       }).isRequired
  //     ).isRequired
  //   }).isRequired
  // ).isRequired
};

export default connect(
  (state) => {
    return {
      latestPublishedPosts: state.recentPosts.latestPublishedPosts,
      latestUpdatedCategories: state.recentPosts.latestUpdatedCategories
    };
  },
  { fetchLatestPublishedPosts }
)(RecentPosts);

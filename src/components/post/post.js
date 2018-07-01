/**
 * External Dependencies
 */
import _          from 'lodash';
import * as React from 'react';
import { Link }   from 'react-router-dom';
import PropTypes  from 'prop-types';
import classnames from 'classnames';
import moment     from 'moment';

const Post = (props) => {
  const publishedAt = moment(props.attributes.publishedAt);

  return (
    <div className={ classnames('post', `-${props.size}`) }>
      
      <header className="header">

        <Link to={ `/${publishedAt.format('YYYY/MM/DD')}/${props.attributes.slug}` } className="_text-undecorated">
          {
            React.createElement(
              props.size === 'small' 
                ? 'h3'
                : props.size === 'medium'
                    ? 'h2'
                    : 'h1', 
              { className: 'post-title' }, 
              props.attributes.title
            )
          }
        </Link>
        
        {
          _.isEmpty(props.relationships.tags.data) ? null : props.relationships.tags.data
            .map(
              (item, key) => (
                  <span
                    className="post-tag"
                    key={ key }
                  >
                    <Link to={ `/tags/${item.attributes.slug}` } className="_color-inherit _text-undecorated">
                      #{ item.attributes.name }
                    </Link>
                </span> 
              )
            )          
        }
        
      </header>

      <article
        className="post-article"
        dangerouslySetInnerHTML={ { __html: _.truncate(props.attributes.html, { length: 512 }) } }>
      </article>

      <footer className="footer">

        <div className="post-author-avatar">
          <Link to={ `/users/${props.relationships.author.data.id}` } className="_color-inherit _text-undecorated">
            <img src={ props.relationships.author.data.attributes.avatarUrl } alt={ props.relationships.author.data.attributes.displayName } />
          </Link>
        </div>

        <div className="post-author-display-name _flex _flex-vertical-align-bottom">
          <Link to={ `/users/${props.relationships.author.data.id}` } className="_color-inherit _text-undecorated">
            { props.relationships.author.data.attributes.displayName }
          </Link>
        </div>
        
        <div className="post-published-at-and-categories">

          <span className="post-published-at">
            { publishedAt.format('MMMM DD, YYYY') }
          </span>

          &nbsp;on&nbsp;

          <span className="post-categories">
            {
              _.isEmpty(props.relationships.categories.data) ? null : props.relationships.categories.data
                .map(
                  (item, key) => (
                    <Link 
                      to={ `/categories/${item.attributes.slug}` } 
                      className="_color-inherit _text-undecorated"
                      key={ key }
                    >
                      { item.attributes.name }
                    </Link>
                  )
                )
                .reduce(
                  (result, item) => [result, ', ', item]
                )
            }
          </span>

        </div>

        <div className="post-comments _flex _flex-vertical-align-middle _flex-horizontal-align-right">
          {
            _.isEmpty(props.relationships.comments.data) ? null : (
              <div className="comment _flex _flex-vertical-align-middle">
                <i className="fal fa-comments" /> { props.relationships.comments.data.length }
              </div> 
            )
          }
        </div>

      </footer>

    </div>
  );
};

Post.propTypes = {
  size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  id: PropTypes.string.isRequired,
  links: PropTypes.shape({
    self: PropTypes.string.isRequired
  }).isRequired,
  attributes: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    publishedAt: PropTypes.string,
    status: PropTypes.oneOf([ 'DRAFT', 'PUBLISHED' ]).isRequired,
    html: PropTypes.string.isRequired,
    markdown: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string
  }).isRequired,
  relationships: PropTypes.shape({
    author: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        attributes: PropTypes.shape({
          avatarUrl: PropTypes.string.isRequired,
          displayName: PropTypes.string.isRequired
        }).isRequired,
        links: PropTypes.shape({
          self: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    }).isRequired,
    tags: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          attributes: PropTypes.shape({
            name: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired
          }).isRequired,
          links: PropTypes.shape({
            self: PropTypes.string.isRequired
          }).isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired
};

export default Post;

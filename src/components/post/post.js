/**
 * External Dependencies
 */
import * as React from 'react';
import { Link }   from 'react-router-dom';
import PropTypes  from 'prop-types';
import moment     from 'moment';

const Post = (props) => {
  return (
    <div className="post">
      
      <header className="header">

        <Link to={ props.link } className="_text-undecorated">
          {
            React.createElement(props.isSingle ? 'h1' : 'h2', { className: 'post-title' }, props.title)
          }
        </Link>
        
        {
          props.tags.map((item, key) =>
            <span
              className="post-tag"
              key={ key }
            >
              <Link to={ item.link } className="_color-inherit _text-undecorated">
                #{ item.name }
              </Link>
            </span> 
          )
        }
        
      </header>

      <article
        className="post-article"
        dangerouslySetInnerHTML={ { __html: props.html } }>
      </article>

      <footer className="footer">

        <div className="post-author-avatar">
          <Link to={ props.author.link } className="_color-inherit _text-undecorated">
            <img src={ props.author.avatarUrl } alt={ props.author.displayName } />
          </Link>
        </div>

        <div className="post-author-display-name _flex _flex-vertical-align-bottom">
          <Link to={ props.author.link } className="_color-inherit _text-undecorated">
            { props.author.displayName }
          </Link>
        </div>
        
        <div className="post-published-at-and-categories">

          <span className="post-published-at">
            { moment(props.publishedAt).format('MMMM DD, YYYY') }
          </span>

          &nbsp;on&nbsp;

          <span className="post-category">
            {
              props.categories
                .map((item, key) => (
                  <Link 
                    to={ item.link } 
                    className="_color-inherit _text-undecorated"
                    key={ key }
                  >
                    { item.name }
                  </Link>
                ))
                .reduce((result, item) => [result, ', ', item])
            }
          </span>

        </div>

        <div className="post-comments _flex _flex-vertical-align-middle _flex-horizontal-align-right">
          {
            !props.comments.length ? null : (
              <div className="post-comments _flex _flex-vertical-align-middle">
                <i className="fal fa-comments" /> { props.comments.length }
              </div> 
            )
          }
        </div>

      </footer>

    </div>
  );
};

Post.propTypes = {
  isSingle: PropTypes.bool,
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
};

export default Post;

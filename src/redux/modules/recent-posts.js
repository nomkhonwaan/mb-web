/**
 * External Dependencies
 */
import _                 from 'lodash';
import { ajax }          from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';
import { ofType }        from 'redux-observable';
import update            from 'immutability-helper';

const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8080';

const FETCH_LATEST_PUBLISHED_POSTS = 'FETCH_LATEST_PUBLISHED_POSTS';
const FETCH_LATEST_PUBLISHED_POSTS_FULLFILLED = 'FETCH_LATEST_PUBLISHED_POSTS_FULLFILLED';

export const fetchLatestPublishedPosts = (offset = 0, limit = 5, include = 'authors,categories,tags') => {
  return {
    type: FETCH_LATEST_PUBLISHED_POSTS,
    offset,
    limit,
    include
  };
};

export const fetchLatestPublishedPostsFullfilled = (payload) => {
  return {
    type: FETCH_LATEST_PUBLISHED_POSTS_FULLFILLED,
    payload
  };
};

export const fetchLatestPublishedPostsEpic = (action$) => {
  return action$.pipe(
    ofType(FETCH_LATEST_PUBLISHED_POSTS),
    mergeMap(({ offset, limit, include }) => {
      return ajax(encodeURI(`${apiUrl}/v1/latest-published-posts?page[offset]=${offset}&page[limit]=${limit}&include=${include}`)).pipe(
        map((response) => {
          return fetchLatestPublishedPostsFullfilled(response);
        })
      );
    })
  );
};

const initialState = require('./recent-posts.json');

function recentPosts(state = initialState, action) {
  switch (action.type) {
    
    case FETCH_LATEST_PUBLISHED_POSTS_FULLFILLED:
      return update(state, {
        latestPublishedPosts: {
          $set: action.payload.response.data.map((item) => {
            return update(item, {
              relationships: {
                $set: _.reduce(item.relationships, (result, item, key) => {
                  const findIncludedItem = (id) => {
                    return _.find(action.payload.response.included, ['id', id]);
                  };

                  if (Array.isArray(item.data)) {
                    return update(result, {
                      $merge: {
                        [key]: item.data.map((item) => {
                          return findIncludedItem(item.id);
                        })
                      }
                    });
                  } else {
                    return update(result, {
                      $merge: {
                        [key]: findIncludedItem(item.data.id)
                      }
                    });
                  }
                }, {})
              }
            })
          })
        }
      });

    default:
      return state;

  }
}

export default recentPosts;

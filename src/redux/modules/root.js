/**
 * External Dependencies
 */
import { combineReducers }                            from 'redux';
import { routerReducer }                              from 'react-router-redux';
import { combineEpics }                               from 'redux-observable';

/**
 * Internal Dependencies
 */
import app                                            from './app';
import recentPosts, { fetchLatestPublishedPostsEpic } from './recent-posts';

export const rootEpic = combineEpics(
  fetchLatestPublishedPostsEpic
);

export const rootReducer = combineReducers({
  app,
  recentPosts,
  router: routerReducer
});
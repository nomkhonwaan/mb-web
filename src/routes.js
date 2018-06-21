/**
 * Internal Dependencies
 */
import Archive           from './archive';
import PageNotFound      from './page-not-found';
import RecentPosts       from './recent-posts';
import { 
  Single, 
  Editor as SingleEditor 
}                        from './single';


const routes = [
  {
    path: '/',
    exact: true,
    component: RecentPosts
  },
  {
    path: '/(categories|tags)/:slug',
    component: Archive
  },
  {
    path: '/:year/:month/:date/:slug',
    component: Single
  }, 
  {
    path: '/:year/:month/:date/:slug/edit',
    component: SingleEditor
  },
  {
    path: '*',
    component: PageNotFound
  }
];

export default routes;

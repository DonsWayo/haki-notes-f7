
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import FormPage from '../pages/form';

import LeftPage1 from '../pages/left-page-1';
import LeftPage2 from '../pages/left-page-2';
import DynamicRoutePage from '../pages/dynamic-route';
import RequestAndLoad from '../pages/request-and-load';
import NotFoundPage from '../pages/404';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },

  {
    path: '/left-page-1/',
    component: LeftPage1,
  },
  {
    path: '/left-page-2/',
    component: LeftPage2,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: ({ router, to, resolve }) => {
      // App instance
      const app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      const userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(() => {
        // We got user data from request
        const user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;

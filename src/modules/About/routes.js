const AboutPage = () => import(/* webpackChunkName: "about" */'./containers/AboutPage');
const AboutContainer = () => import(/* webpackChunkName: "about" */'./containers/AboutContainer');
const AboutContainerSecond = () => import(/* webpackChunkName: "about" */'./containers/AboutContainerSecond');

export default {
  path: '/about',
  name: 'about',
  component: AboutPage,
  children: [
    {
      path: 'one',
      name: 'about-one',
      component: AboutContainer,
    },
    {
      path: 'second',
      name: 'about-second',
      component: AboutContainerSecond,
    },
  ],
};
export default (store, next, config) => {
  const type = config && config.simple ? 'global/auth/checkSimple' : 'global/auth/checkAuthentication';
  debugger;
  return store.dispatch(type)
    .then(next)
    .catch(() => next('/auth/login'));
};

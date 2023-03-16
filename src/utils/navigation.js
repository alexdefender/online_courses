import Router from 'next/router';

const URL_EXP = /^(https?:\/\/)?(([a-z\d-])*\.)+[a-z]{2,}/i;
const isLocalUrl = (value) => !URL_EXP.test(value);

export const redirect = (path, current) => {
  if (isLocalUrl(path)) {
    return Router.push(current || path, path, { shallow: true });
  }

  window.location.href = path;
  return Promise.resolve();
};

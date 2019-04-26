import React from 'react';


// Utilities.
import isBrowser from '../../common/isBrowser';



const getWrapper = (Component) => {


  const w = () => (
    <Component/>
  );

  return w;
};

/**
 * Get route loadable configs.
 *
 * @param {Object} component
 *  React components.
 *
 * @return {Object}
 *  Reoute configs.
 */
const getRouteLoadableConfigs = (component) => ({
  // getComponent(nextState, callback) {
  //
  //
  //
  //   if(!isBrowser){
  //     callback(null, component.fakeRender);
  //     return;
  //   }
  //
  //   callback(null, component.render);
  //
  //   //return component.render();
  //
  //
  // },
  component: component.fakeRender,
  onEnter: (nextState, replace, callback) => {
    if (!isBrowser) {
      callback();
      return;
    }

    // Preload component first.
    component.preload().then(() => {
      callback();
    });
  },
});

export default getRouteLoadableConfigs;

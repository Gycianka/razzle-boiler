import React from 'react';
import loadable from "@loadable/component";

const getLoadableComponent = (fn, options) => {
  const Component = loadable(fn, options);

  Component.preload = fn.requireAsync || fn;
  Component.fakeRender = (props) => (
    <Component {...props}/>
  );

  return Component;
};

export default getLoadableComponent;

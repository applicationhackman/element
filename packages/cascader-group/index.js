import CascaderGroup from './src/main';

/* istanbul ignore next */
CascaderGroup.install = function(Vue) {
  console.log('Cascader is here ', CascaderGroup);
  Vue.component(CascaderGroup.name, CascaderGroup);
};

export default CascaderGroup;

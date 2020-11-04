function loadRuntimeModules(runtime) {
  runtime.loadModule(
    require('/Users/xiaomei/Downloads/works/icestark/icestark-layout/node_modules/build-plugin-app-core/lib/runtime.js')
  );

  runtime.loadModule(
    require('/Users/xiaomei/Downloads/works/icestark/icestark-layout/node_modules/build-plugin-ice-router/lib/runtime.js')
  );

  runtime.loadModule(
    require('/Users/xiaomei/Downloads/works/icestark/icestark-layout/node_modules/build-plugin-ice-logger/lib/runtime.js')
  );

  runtime.loadModule(
    require('/Users/xiaomei/Downloads/works/icestark/icestark-layout/node_modules/build-plugin-ice-store/lib/runtime.js')
  );

  runtime.loadModule(
    require('/Users/xiaomei/Downloads/works/icestark/icestark-layout/node_modules/build-plugin-icestark/lib/runtime.js')
  );
}

export default loadRuntimeModules;

export default {
  entry: 'build/index.js',
  dest: 'build/bundles/emojify.umd.js',
  format: 'umd',
  moduleName: 'ng.emojify',
  onwarn,
  globals: {
    '@angular/core': 'ng.core'
  }
};

function onwarn(message) {
  const suppressed = [
    'UNRESOLVED_IMPORT',
    'THIS_IS_UNDEFINED'
  ];

  if (!suppressed.find(code => message.code === code)) {
    return console.warn(message.message);
  }
}

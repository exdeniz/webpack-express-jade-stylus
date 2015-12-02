// Reload jade from webpack



function requireAll(r) { r.keys().forEach(r); }

// load images
requireAll(require.context('./assets/images/', true, /\.(jpe?g|png|gif|svg)$/));

requireAll(require.context('svg-sprite!./assets/svg/', false, /\.svg$/));

// var files = require.context('svg-sprite!./assets/svg/', false, /\.svg$/);
// files.keys().forEach(files);

// require('./views/index.jade');
requireAll(require.context('./views/', true, /\.jade$/));

// load font
requireAll(require.context('./assets/fonts/', true, /\.styl$/));
//load layout
requireAll(require.context('./assets/stylus/layout/', true, /\.styl$/));

// load ui
requireAll(require.context('./assets/stylus/ui/', true, /\.styl$/));

// load block
requireAll(require.context('./assets/stylus/block/', true, /\.styl$/));

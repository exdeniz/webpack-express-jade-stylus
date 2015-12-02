// Reload jade from webpack



function requireAll(r) { r.keys().forEach(r); }

// load images
requireAll(require.context('./assets/images/', true, /\.(jpe?g|png|gif|svg)$/));

// require('./views/index.jade');
requireAll(require.context('./views/', true, /\.jade$/));

//load layout
requireAll(require.context('./assets/stylus/layout/', true, /\.styl$/));

// load ui
requireAll(require.context('./assets/stylus/ui/', true, /\.styl$/));

// load block
requireAll(require.context('./assets/stylus/block/', true, /\.styl$/));

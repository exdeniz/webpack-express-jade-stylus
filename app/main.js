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

// load layout
requireAll(require.context('./assets/stylus/layout/', true, /\.styl$/));

// load ui
requireAll(require.context('./assets/stylus/ui/', true, /\.styl$/));

// load block
requireAll(require.context('./assets/stylus/block/', true, /\.styl$/));

// load js

import { menu } from './component/menu/menu.js'
import { grid } from './component/datatables/datatables.js'
import { dropdown } from './component/dropdown/dropdown.js'
import { checkbox } from './component/checkbox/checkbox.js'
import { filter } from './component/dropdown/filter.js'
import { datepick } from './component/date/date.js'
import { timepick } from './component/date/timepicker.js'
import { select } from './component/select/select.js'
import { spinner } from './component/spiner/spiner.js'
import { inputmask } from './component/inputmask/inputmask.js'

$( document ).ready(function () {
        menu()
        grid()
        dropdown()
        checkbox()
        filter()
        datepick()
        select()
        spinner()
        timepick()
        inputmask()
    }

);

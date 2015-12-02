/* eslint no-console: 0 */
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';
import jade from 'jade';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

if (isDeveloping) {
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        //contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/app/views');
    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    //app.use(express.static(__dirname + '/dist/img'));
    app.get('/index', function response(req, res) {
        // res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
        // res.end();
        res.render('index.jade')
    });
    app.get('/:file', function(req, res) {
        res.render(req.params.file);
    });
} else {
    app.use(express.static(__dirname + '/dist'));
    app.get('*', function response(req, res) {
        //res.sendFile(path.join(__dirname, 'dist/index.html'));
        res.render('index')
    });
}

app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

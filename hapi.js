var hapi = require('hapi');
var vision = require('vision');
var inert = require('inert');
var server = new hapi.Server();

var Webpack = require('webpack');
var webpackConf = require('./webpack.config.js');
webpackConf.entry = {
    app: './app/main.js'
};


webpackConf.devtool = 'source-map';

compiler = Webpack(webpackConf);

server.connection({
    host: 'localhost',
    port: 9001
})

server.register([vision, inert], function(err) {
    if (err) {
        throw err;
    }
    //register: require("hapi-cache-buster")
    register: require('hapi-webpack-dev-plugin'),
    server.views({
        engines: {
            jade: {
                module: require('jade'),
                isCached: false
            }
        },
        path: __dirname + '/app/views/',
        compileOptions: {
            pretty: true
        }
    });
    server.route({
        method: 'GET',
        path: '/favicon.ico',
        handler: {
            file: './favicon.ico'
        }
    })
    server.route({
        method: 'GET',
        path: '/{filename}',
        handler: function(request, reply) {
            // Render the view with the custom greeting
            var data = {
                title: 'This is Index!',
                message: 'Hello, World. You crazy handlebars layout'
            };

            return reply.view(request.params.filename, data);
        }
    })
    server.route({
        path: "/{path*}",
        method: "GET",
        handler: {
            directory: {
                path: __dirname + '/app/views/',
                listing: false,
                index: false
            }
        }
    })
    server.start(function() {
         options: {
          compiler: compiler
        }
        console.log('Server started at: ' + server.info.uri);
    });
});

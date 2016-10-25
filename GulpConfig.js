function GulpConfig() {
    'use strict';

    var home = './Website/';
    var src = './';

    var config = {
        SassDestination: home + 'CSS/',
        home: home,
        index: home + 'Index.html',
        js: home + 'javascript/**/*.js',

        //all sass files
        Sass: src + 'Sass/style.scss',
        css: home + 'CSS/style.css',

        /**
         * Bower and NPM location
         */

        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        }

    };

    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerjson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;

}

module.exports = GulpConfig;
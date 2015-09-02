'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        vulcanize: {
            dist: {
                options: {
                    abspath: 'web/',
                    targetUrl: '/index.html'
                },
                files: {
                    'build.html': 'web/index.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-vulcanize');
};


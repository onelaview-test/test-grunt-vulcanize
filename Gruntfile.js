'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        vulcanize: {
            dist: {
                options: {
                    abspath: 'web/'
                },
                files: {
                    'build.html': 'index.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-vulcanize');
};


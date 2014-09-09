module.exports = function (grunt) {
    grunt.initConfig({        
        protractor: {
            e2e: {
                options: {
                    configFile: 'protractor.conf.js',
                    keepAlive: true
                }
            },
            debug: {
                options: {
                    configFile: 'protractor.conf.js',
                    keepAlive: true,
                    debug: true
                }
            }
        },
    });

    //add grunt protractor npm tasks into grunt.
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('default', ['protractor:e2e']);
}
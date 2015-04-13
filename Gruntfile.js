module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['css/*.scss', 'css/*.sass'],
            options: {
                livereload: {
                    port: 9009
                }
            }
        },
        concat: {
            // Dependencies
            jsDep: {
                src: [
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                ],
                dest: 'assets/js/dist/dependencies.js'
            },
            cssDep: {
                src: [
                    'bower_components/normalize.css/normalize.css',
                    'bower_components/fontawesome/css/font-awesome.min.css',
                ],
                dest: 'assets/css/dist/dependencies.css'
            },

            // Angular code
            app: {
                src: [
                    'app/**/*.js'
                ],
                dest: 'assets/js/dist/app.js'
            },

            // Styles
            css: {
                src: [
                    'assets/css/*.css'
                ],
                dest: '/css/dist/app.css'
            }
        },
        copy: {
            js: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'bower_components/angular/angular.min.js.map',
                            'bower_components/angular-route/angular-route.min.js.map'
                            ], 
                        dest: 'assets/js/dist/'
                    }
                ]
            },
            css: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'bower_components/fontawesome/fonts/*',
                            'bower_components/fontawesome/css/*.map'
                            ], 
                        dest: 'assets/css/fonts/'

                    }

                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('dependencies', ['concat:jsDep', 'concat:cssDep', 'copy']);
}
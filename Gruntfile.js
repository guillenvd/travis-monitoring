module.exports = function(grunt) {
  grunt.initConfig({
  
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-bump');

  grunt.registerTask('ci', ['jshint', 'mochaTest:test' ]);
  grunt.registerTask('default', ['ci']);
};

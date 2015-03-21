module.exports = function (grunt) {
	grunt.initConfig({
		watch: {
			files: [
				'composite.js',
				'index.html',
				'youtyping-modern.js',
				'youtyping-modern.css'
			],
			options: {
				livereload: true
			}
		}
	});

	grunt.loadNpmTasks('../../../../node_modules/grunt-contrib-watch');
};

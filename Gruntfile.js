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
		},
		copy: {
			files: {
				src: [
					'images/*',
					'*.js',
					'*.html',
					'*.css'
				],
				dest: '../../../Documents/GitHub/YouTyping-Modern/'
			}
		}
	});

	grunt.loadNpmTasks('../../../../node_modules/grunt-contrib-watch');
	grunt.loadNpmTasks('../../../../node_modules/grunt-contrib-copy');
};

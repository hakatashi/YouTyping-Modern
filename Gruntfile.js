module.exports = function (grunt) {
	grunt.initConfig({
		watch: {
			files: [
				'*.js',
				'*.html',
				'*.css'
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

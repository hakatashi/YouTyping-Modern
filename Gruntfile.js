var jade = require('jade');

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
					'composite.js',
					'composite.html',
				],
				dest: '../../../Documents/GitHub/YouTyping-Modern/'
			}
		},
		jade: {
			build: {
				options: {
					data: {
						renderFile: jade.renderFile,
					},
				},
				files: {
					'index.html': 'index.jade',
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jade');

	grunt.registerTask('default', ['jade']);
};

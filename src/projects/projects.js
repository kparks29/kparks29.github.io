import angular from 'angular';

function config ($stateProvider) {
	$stateProvider.state('nav.projects', {
		url: '/projects',
		templateUrl: 'src/projects/projects.html',
		controller: 'ProjectsCtrl',
		controllerAs: 'projects'
	});
}

class ProjectsCtrl {
	constructor () {
		this.name = 'projects';
	}
}

export default angular.module('projects', [])
	.config(config)
	.controller('ProjectsCtrl', ProjectsCtrl);
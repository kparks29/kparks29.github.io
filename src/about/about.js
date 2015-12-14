import angular from 'angular';

function config ($stateProvider) {
	$stateProvider.state('nav.about', {
		url: '/about',
		templateUrl: 'src/about/about.html',
		controller: 'AboutCtrl',
		controllerAs: 'about'
	});
}

class AboutCtrl {
	constructor () {
		this.name = 'about';
	}
}

export default angular.module('about', [])
	.config(config)
	.controller('AboutCtrl', AboutCtrl);
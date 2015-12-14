import angular from 'angular';

function config ($stateProvider) {
	$stateProvider.state('nav.home', {
		url: '/',
		templateUrl: 'src/home/home.html',
		controller: 'HomeCtrl',
		controllerAs: 'home'
	});
}

class HomeCtrl {
	constructor () {
		this.name = 'home';
	}
}

export default angular.module('home', [])
	.config(config)
	.controller('HomeCtrl', HomeCtrl);
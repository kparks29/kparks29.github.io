import angular from 'angular';

function config ($stateProvider) {
	$stateProvider.state('nav', {
		url: '',
		templateUrl: 'src/nav/nav.html',
		controller: 'NavCtrl',
		controllerAs: 'nav'
	});
}

class NavCtrl {
	constructor () {
		this.test = 'test';
	}
}

export default angular.module('nav', [])
	.config(config)
	.controller('NavCtrl', NavCtrl);
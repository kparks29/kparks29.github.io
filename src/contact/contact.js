import angular from 'angular';

function config ($stateProvider) {
	$stateProvider.state('nav.contact', {
		url: '/contact',
		templateUrl: 'src/contact/contact.html',
		controller: 'ContactCtrl',
		controllerAs: 'contact'
	});
}

class ContactCtrl {
	constructor () {
		this.name = 'contact';
	}
}

export default angular.module('contact', [])
	.config(config)
	.controller('ContactCtrl', ContactCtrl);
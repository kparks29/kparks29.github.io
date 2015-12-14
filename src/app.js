// libraries
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// modules
import config from './app.config';
import navModule from './nav/nav';
import homeModule from './home/home';
import aboutModule from './about/about';
import projectsModule from './projects/projects';
import contactModule from './contact/contact';

var dependencies = [
	uiRouter,
	navModule.name,
	homeModule.name,
	aboutModule.name,
	projectsModule.name,
	contactModule.name
];

angular.module('Portfolio', dependencies);
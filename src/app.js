// libraries
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// modules
import config from './app.config';
import navModule from './nav/nav';

var dependencies = [
	uiRouter,
	navModule.name
];

angular.module('Portfolio', dependencies);
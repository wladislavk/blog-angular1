import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { LoginComponent } from './login.component';

export const LoginModule = angular
  .module('blog.pages.login', [uiRouter])
  .component('loginPage', LoginComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('blog.login', {
        url: '/login',
        component: 'loginPage',
        resolve: {},
      })
    ;
    $urlRouterProvider.otherwise('/');
  })
  .name;

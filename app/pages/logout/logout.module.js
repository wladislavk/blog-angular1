import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const LogoutModule = angular
  .module('blog.pages.logout', [uiRouter])
  /*.config(($routeProvider) => {
    'ngInject';
    $routeProvider
      // .when('/logout', { templateUrl: './login.html' })
      .otherwise({ redirectTo: '/' })
    ;
  })*/
  .name;

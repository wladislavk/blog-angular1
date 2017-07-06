import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { ResetRequestComponent } from './resetrequest.component';

export const ResetRequestModule = angular
  .module('blog.pages.resetRequest', [uiRouter])
  .component('resetRequestPage', ResetRequestComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('blog.resetRequest', {
        url: '/reset-request',
        component: 'resetRequestPage',
        resolve: {},
      })
    ;
    $urlRouterProvider.otherwise('/');
  })
  .name;

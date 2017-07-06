import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { ResetTargetComponent } from './resettarget.component';

export const ResetTargetModule = angular
  .module('blog.pages.resetTarget', [uiRouter])
  .component('resetTargetPage', ResetTargetComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('blog.resetTarget', {
        url: '/reset-target/:token',
        component: 'resetTargetPage',
        resolve: {},
      })
    ;
    $urlRouterProvider.otherwise('/');
  })
  .name;

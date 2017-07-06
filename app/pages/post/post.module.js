import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { PostComponent } from './post.component';

export const PostModule = angular
  .module('blog.pages.post', [uiRouter])
  .component('postPage', PostComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('blog.post', {
        url: '/post/:id',
        component: 'postPage',
        resolve: {},
      })
    ;
    $urlRouterProvider.otherwise('/');
  })
  .name;

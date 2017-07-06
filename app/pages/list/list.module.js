import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { ListComponent } from './list.component';
import { ExcerptModule } from './excerpt/excerpt.module';
import { PaginationModule } from './pagination/pagination.module';

export const ListModule = angular
  .module('blog.pages.list', [
    uiRouter,
    ExcerptModule,
    PaginationModule,
  ])
  .component('listPage', ListComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('blog.list', {
        url: '/?category&page',
        component: 'listPage',
        resolve: {},
        params: {
          category: {
            value: 'all',
            squash: true,
          },
          page: {
            value: '1',
            squash: true,
          },
        },
      })
    ;
    /*$urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.invoke(['$state', function ($state) {
        $state.go('blog.list', { lang: $state.activeLang });
      }]);
    })*/
    //$urlRouterProvider.otherwise('/');
  })
  .name;

import angular from 'angular';
import { PaginationComponent } from './pagination.component';

export const PaginationModule = angular
  .module('blog.pages.list.pagination', [])
  .component('pagination', PaginationComponent)
  .name;

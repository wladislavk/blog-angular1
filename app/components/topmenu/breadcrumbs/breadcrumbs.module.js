import angular from 'angular';
import { BreadcrumbsComponent } from './breadcrumbs.component';

export const BreadcrumbsModule = angular
  .module('blog.components.topmenu.breadcrumbs', [])
  .component('breadcrumbs', BreadcrumbsComponent)
  .name;

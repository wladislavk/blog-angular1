import angular from 'angular';
import { ExcerptComponent } from './excerpt.component';

export const ExcerptModule = angular
  .module('blog.pages.list.excerpt', [])
  .component('excerpt', ExcerptComponent)
  .name;

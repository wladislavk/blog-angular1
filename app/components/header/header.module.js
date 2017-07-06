import angular from 'angular';
import { HeaderComponent } from './header.component';

export const HeaderModule = angular
  .module('blog.components.header', [])
  .component('headerComponent', HeaderComponent)
  .name;

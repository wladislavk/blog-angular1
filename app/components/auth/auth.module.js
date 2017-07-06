import angular from 'angular';
import { AuthComponent } from './auth.component';

export const AuthModule = angular
  .module('blog.components.auth', [])
  .component('auth', AuthComponent)
  .name;

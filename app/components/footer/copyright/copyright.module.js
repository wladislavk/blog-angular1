import angular from 'angular';
import { CopyrightComponent } from './copyright.component';

export const CopyrightModule = angular
  .module('blog.components.footer.copyright', [])
  .component('copyright', CopyrightComponent)
  .name;

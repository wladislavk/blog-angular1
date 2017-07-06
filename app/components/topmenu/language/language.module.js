import angular from 'angular';
import ngTranslate from 'angular-translate';
import { LanguageComponent } from './language.component';
import { LanguageService } from './language.service';

export const LanguageModule = angular
  .module('blog.components.topmenu.language', [ngTranslate])
  .component('language', LanguageComponent)
  .service('LanguageService', LanguageService)
  .name;

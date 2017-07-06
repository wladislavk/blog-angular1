import angular from 'angular';
import { TopmenuComponent } from './topmenu.component';
import { LanguageModule } from './language/language.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';

export const TopmenuModule = angular
  .module('blog.components.topmenu', [BreadcrumbsModule, LanguageModule])
  .component('topMenu', TopmenuComponent)
  .name;

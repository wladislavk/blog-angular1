import angular from 'angular';
import { MainMenuComponent } from './mainmenu.component';

export const MainMenuModule = angular
  .module('blog.components.mainSidebar.mainMenu', [])
  .component('mainMenu', MainMenuComponent)
  .name;

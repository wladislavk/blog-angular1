import angular from 'angular';
import { MainSidebarComponent } from './mainsidebar.component';
import { MainMenuModule } from './mainmenu/mainmenu.module';

export const MainSidebarModule = angular
  .module('blog.components.mainSidebar', [MainMenuModule])
  .component('mainSidebar', MainSidebarComponent)
  .name;

import angular from 'angular';
import { FooterComponent } from './footer.component';
import { CopyrightModule } from './copyright/copyright.module';

export const FooterModule = angular
  .module('blog.components.footer', [CopyrightModule])
  .component('footerComponent', FooterComponent)
  .name;

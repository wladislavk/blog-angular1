import angular from 'angular';
import { AuthModule } from './auth/auth.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { MainSidebarModule } from './mainsidebar/mainsidebar.module';
import { TopmenuModule } from './topmenu/topmenu.module';

export const ComponentsModule = angular
  .module('blog.components', [
    AuthModule,
    FooterModule,
    HeaderModule,
    MainSidebarModule,
    TopmenuModule,
  ])
  .name;

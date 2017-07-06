import angular from 'angular';
import { ListModule } from './list/list.module';
import { LoginModule } from './login/login.module';
import { LogoutModule } from './logout/logout.module';
import { PostModule } from './post/post.module';
import { ResetRequestModule } from './resetrequest/resetrequest.module';
import { ResetTargetModule } from './resettarget/resettarget.module';

export const PagesModule = angular
  .module('blog.pages', [
    ListModule,
    LoginModule,
    LogoutModule,
    PostModule,
    ResetRequestModule,
    ResetTargetModule,
  ])
  .name;

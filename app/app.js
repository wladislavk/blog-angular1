import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';
import angularTranslate from 'angular-translate';
import 'angular-translate-storage-cookie';
import 'angular-translate-storage-local';
import { enTranslations, ruTranslations } from './translations';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { LanguageService } from './components/topmenu/language/language.service';
import './assets/css/main.scss';
import './assets/js/bootstrap';
import './assets/js/main';

export const AppModule = angular
  .module('blog', [
    uiRouter,
    ngCookies,
    angularTranslate,
    ComponentsModule,
    PagesModule,
  ])
  .component('app', AppComponent)
  .config(($locationProvider, $stateProvider, $uiRouterProvider, $translateProvider) => {
    'ngInject';
    $translateProvider
      .useCookieStorage()
      .translations('en', enTranslations)
      .translations('ru', ruTranslations)
    ;
    $translateProvider.preferredLanguage('en');

    $locationProvider.html5Mode(true);
    $uiRouterProvider.trace.enable(1);
    $stateProvider
      .state('blog', {
        abstract: true,
        url: '/{lang:(?:en|ru)}',
        params: {
          lang: null,
        },
        template: '<ui-view/>',
      })
      .state('index', {
        url: '/',
        redirectTo: { state: 'blog.list', params: { lang: LanguageService.getDefaultLanguage() } },
      })
    ;

    const $urlService = $uiRouterProvider.urlService;
    $urlService.rules.otherwise({
      state: 'blog.list',
      parameters: { lang: LanguageService.getDefaultLanguage() },
    });

  })
  /*.run(($state, $location, LanguageService) => {
    'ngInject';
    console.log(LanguageService.getDefaultLanguage());
  })*/
  .name;

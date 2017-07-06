export const LanguageComponent = {
  templateUrl: './language.html',
  controller: class LanguageComponent {
    /**
     * @param $scope
     * @param $rootScope
     * @param $translate
     * @param {LanguageService} LanguageService
     */
    constructor($scope, $rootScope, $translate, LanguageService) {
      'ngInject';
      this.$scope = $scope;
      this.$rootScope = $rootScope;
      this.$translate = $translate;
      this.languageService = LanguageService;
    }

    $onInit() {
      this.$rootScope.activeLang = this.languageService.getLanguage();
      // console.log(this.parent.$transition$);
      /*this.$transition$.onSuccess({ }, trans => {
        this.stateChangeSuccess(trans.to(), trans.params());
      });*/
    }

    stateChangeSuccess(toState, params) {
      if (params.lang !== undefined) {
        let otherLang = 'ru';
        if (params.lang === 'ru') {
          otherLang = 'en';
        }

        this.$rootScope.activeLang = params.lang;
        this.$rootScope.otherLangURL = $location.absUrl()
          .replace('/' + params.lang, '/' + otherLang);
        this.$translate.use(params.lang);
      }
    }
  },
};

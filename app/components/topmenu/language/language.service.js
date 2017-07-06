export class LanguageService {
  constructor($state, $cookies) {
    'ngInject';
    this.$state = $state;
    this.$cookies = $cookies;
  }

  getLanguage() {
    const lang = this.$state.params.lang;
    if (lang) {
      return lang;
    }

    const cookieLang = this.$cookies.get('lang');
    if (cookieLang) {
      return cookieLang;
    }

    return this.constructor.getDefaultLanguage();
  }

  static getDefaultLanguage() {
    return 'en';
  }
}

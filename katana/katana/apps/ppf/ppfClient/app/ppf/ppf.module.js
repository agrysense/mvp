/**
 * @author r.maalouf
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('katana.ppf', [
    'ui.router',

    'katana.ppf.dashboard',
    'katana.ppf.ui',
    'katana.ppf.components',
    'katana.ppf.form',
    'katana.ppf.tables',
    'katana.ppf.charts',
    'katana.ppf.maps',
    'katana.ppf.profile',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

  }

})();

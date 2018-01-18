/**
 * @author r.maalouf
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('katanaCore.auth', [
    'ui.router',

    'katanaCore.auth.login',
    //'katanaCore.auth.reg',
    //'katanaCore.auth.forgot',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/login');

  }

})();

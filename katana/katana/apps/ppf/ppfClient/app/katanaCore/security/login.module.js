/**
 * @author r.maalouf
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('katanaCore.auth.login', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('login', {
          url: '/login',
          title: 'login',
          templateUrl: 'app/katanaCore/security/login.html',
          controller: 'loginPageCtrl',
        });
  }

})();

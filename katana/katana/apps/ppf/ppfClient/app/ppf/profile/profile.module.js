/**
 * @author r.maalouf
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('katana.ppf.profile', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('profile', {
          url: '/profile',
          title: 'Profile',
          templateUrl: 'app/pages/profile/profile.html',
          controller: 'ProfilePageCtrl',
        });
  }

})();

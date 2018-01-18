/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('katana.ppf.ui', [
    'katana.ppf.ui.typography',
    'katana.ppf.ui.buttons',
    'katana.ppf.ui.icons',
    'katana.ppf.ui.modals',
    'katana.ppf.ui.grid',
    'katana.ppf.ui.alerts',
    'katana.ppf.ui.progressBars',
    'katana.ppf.ui.notifications',
    'katana.ppf.ui.tabs',
    'katana.ppf.ui.slider',
    'katana.ppf.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();

/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('KatanaAdmin.pages.ui', [
    'KatanaAdmin.pages.ui.typography',
    'KatanaAdmin.pages.ui.buttons',
    'KatanaAdmin.pages.ui.icons',
    'KatanaAdmin.pages.ui.modals',
    'KatanaAdmin.pages.ui.grid',
    'KatanaAdmin.pages.ui.alerts',
    'KatanaAdmin.pages.ui.progressBars',
    'KatanaAdmin.pages.ui.notifications',
    'KatanaAdmin.pages.ui.tabs',
    'KatanaAdmin.pages.ui.slider',
    'KatanaAdmin.pages.ui.panels',
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

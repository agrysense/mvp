/**
 * @author r.maalouf
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('katana.ppf.charts', [
      'katana.ppf.charts.amCharts',
      'katana.ppf.charts.chartJs',
      'katana.ppf.charts.chartist',
      'katana.ppf.charts.morris'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts', {
          url: '/charts',
          abstract: true,
          template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
          title: 'Charts',
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 150,
          },
        });
  }

})();

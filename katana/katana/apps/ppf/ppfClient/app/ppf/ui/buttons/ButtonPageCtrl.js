/**
 * @author r.maalouf
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('katana.ppf.ui.buttons')
      .controller('ButtonPageCtrl', ButtonPageCtrl);

  /** @ngInject */
  function ButtonPageCtrl($scope, $timeout) {
    $scope.progressFunction = function() {
      return $timeout(function() {}, 3000);
    };
  }

})();

/**
 * @author r.maalouf
 * created on 10.12.2016
 */
(function () {
  'use strict';

  angular.module('KatanaAdmin.pages.form')
      .controller('SwitchDemoPanelCtrl', SwitchDemoPanelCtrl);

  /** @ngInject */
  function SwitchDemoPanelCtrl() {
    var vm = this;
    vm.switches = {
      s1: true,
      s2: false,
      s3: true,
      s4: true,
      s5: false
    };
  }

})();

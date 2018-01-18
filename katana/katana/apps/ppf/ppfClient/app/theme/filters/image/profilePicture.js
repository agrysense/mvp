/**
 * @author r.maalouf
 * created on 17.12.2015
 */
(function () {
  'use strict';

  angular.module('KatanaAdmin.theme')
      .filter('profilePicture', profilePicture);

  /** @ngInject */
  function profilePicture(layoutPaths) {
    return function(input, ext) {
      ext = ext || 'png';
      return layoutPaths.images.profile + input + '.' + ext;
    };
  }

})();

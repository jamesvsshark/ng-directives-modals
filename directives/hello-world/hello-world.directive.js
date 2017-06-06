(function () {
  'use strict';

  angular.module('sampleApp')
    .directive('helloWorld', HelloWorld);

  HelloWorld.$inject = [];

  function HelloWorld() {
    var directive = {
      'template': '<p>Hello, World!</p>'
    };

    return directive;
  }

})();

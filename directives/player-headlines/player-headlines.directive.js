(function () {
  'use strict';

  angular.module('sampleApp')
    .directive('playerHeadlines', PlayerHeadlines);

  PlayerHeadlines.$inject = [];

  function PlayerHeadlines() {
    var directive = {
      'restrict': 'E',
      'scope': {
        'headline': '='
      },
      'template': '<p>Latest news: {{headline}}</p>'
    };

    return directive;
  }

})();

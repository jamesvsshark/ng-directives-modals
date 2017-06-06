(function () {
  'use strict';

  angular.module('sampleApp')
    .directive('playerCard', PlayerCard);

  PlayerCard.$inject = [];

  function PlayerCard() {
    var directive = {
      'restrict': 'E',
      'scope': {
        'playerName': '@',
        'playerGender': '@',
        'onPlayerStatusChange': '&'
      },
      // 'template': '<h1>{{playerName}} <small>{{playerGender}}</small></h1>',
      'templateUrl': 'directives/player-card/player-card.cache.html',
      'controller': function ($scope, $element, $attrs) {
        // can also access attributes (attrs) passed to component here 
        // console.log($attrs);

        $scope.benchPlayer = function (playerName) {
          $scope.onPlayerStatusChange({
            headline: playerName + " has been benched!"
          });
        }
      }
    };

    return directive;
  }

})();

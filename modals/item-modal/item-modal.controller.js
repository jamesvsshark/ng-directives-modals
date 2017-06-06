(function (angular) {
  'use strict';

  angular.module('sampleApp')
    .controller('ItemModalController', ['$modalInstance', 'selectedItem', 'name',
      function ($modalInstance, selectedItem, name) {
        var vm = this;
        
        vm.item = selectedItem;
        vm.itemCC = angular.copy(selectedItem);

        // alert('hi ' + name);

        vm.submit = function () {
          angular.copy(vm.itemCC, vm.item);
          $modalInstance.close(vm.item);
        };

        vm.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
      }
    ]);

})(angular);

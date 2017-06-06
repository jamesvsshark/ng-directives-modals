(function (angular) {
  'use strict';

  angular.module('sampleApp')
    .controller('SampleAppCtrl', ['$modal', function ($modal) {
      var vm = this;

      // directives
      vm.players = [{
        name: "Michael Jordan",
        gender: "Male"
      }, {
        name: "Lesley Lou",
        gender: "Female"
      }];

      vm.breakingNews = "Game today!";
      vm.releaseUpdatedNews = releaseUpdatedNews;

      // modal
      vm.openSimpleModal = openSimpleModal;

      vm.items = [{
        name: 'Pens'
      }, {
        name: 'Pencils'
      }, {
        name: 'Paper'
      }, {
        name: 'Chair'
      }];
      vm.openItem = openItem;


      /********************
       * Public Methods for directives
       ********************/

      /**
       * @ngdoc method
       * @name releaseUpdatedNews
       * @methodOf pdr.sample.SampleController
       * @returns {void} Emits latest news to the news componet to dispay up to date news
       */
      function releaseUpdatedNews(message) {
        vm.breakingNews = message;
      }

      /********************
       * Public Methods for modals
       ********************/

      /**
       * @ngdoc method
       * @name openSimpleModal
       * @methodOf pdr.sample.SampleController
       * @returns {void} Opens simple modal with inline template
       */
      function openSimpleModal() {
        $modal.open({
          template: 'Hello in the most simplest of ways',
          size: 'lg'
        });
      }

      /**
       * @ngdoc method
       * @name openItem
       * @methodOf pdr.sample.SampleController
       * @returns {void} Opens complex modal passing data in with resolve 
       * and passing data back to calling page with modalInstance.result promise
       */
      function openItem(selectedItem) {
        var modalInstance = $modal.open({
          templateUrl: 'modals/item-modal/item-modal.cache.html',
          // controller should be in its own file; here in line for brevity
          controller: 'ItemModalController',
          controllerAs: 'vm',
          size: 'lg',
          resolve: {
            selectedItem: function () {
              return selectedItem;
            },
            name: function () {
              return 'James';
            }
          }
        });

        modalInstance.result.then(function (updatedItem) {
          alert('Item has been updated to: ' + updatedItem.name);
        });
      }
    }]);
})(angular);

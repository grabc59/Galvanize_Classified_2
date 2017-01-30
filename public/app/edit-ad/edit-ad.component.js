(function() {
  'use strict';

  angular.module('app')
  .component('editAd', {
    controller: controller,
    templateUrl: `app/edit-ad/edit-ad.template.html`
 });
    controller.$inject = ['adsListService', '$stateParams'];

    function controller(adsListService, $stateParams) {
      const vm = this;
      
      vm.$onInit = function() {
        console.log("edit-ad controller start");
        const adId = $stateParams.id;
        vm.getSpecificAd(adId);
      }

      vm.getSpecificAd = function(adId) {
          adsListService.getSpecificAd(adId)
          .then(function(response) {
                vm.ad = response.data;
            });
      }
    }
}());
(function() {
  'use strict';

  angular.module('app')
  .component('adsList', {
    controller: controller,
    templateUrl: `app/ads-list/ads-list.template.html`
 });
    controller.$inject = ['adsListService'];

    function controller(adsListService) {
      const vm = this;
      
      vm.$onInit = function() {
        console.log("ads-list controller start");
        vm.getAds();
        vm.toggleAdvertiseFormTracker = false;
      }

      ////////////////////////////////
      //////// LOADING ADS
      ////////////////////////////////
      vm.getAds = function() {
        adsListService
        .getAds()
        .then(function(ads) {
          vm.ads = ads;
          console.log(vm.ads);
        });
      };

      vm.toggleAdvertiseForm = function(e) {
        vm.toggleAdvertiseFormTracker = !vm.toggleAdvertiseFormTracker;
        console.log(vm.toggleAdvertiseFormTracker);
      }


    }
}());
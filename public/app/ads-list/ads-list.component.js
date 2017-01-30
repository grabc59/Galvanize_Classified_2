(function() {
  'use strict';

  angular.module('app')
  .component('adsList', {
    controller: controller,
    templateUrl: `app/ads-list/ads-list.template.html`
 });

    function controller() {
      const vm = this;
      vm.$onInit = function() {
        console.log("ads-list start");
        vm.getAds();
      }

      ////////////////////////////////
      //////// LOADING ADS
      ////////////////////////////////
      vm.getPosts = function() {
        adsService
        .getPosts()
        .then(function(posts) {
          vm.posts = posts;
        });
      };


    }
}());
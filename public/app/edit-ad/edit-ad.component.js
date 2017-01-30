(function() {
  'use strict';

  angular.module('app')
  .component('adsList', {
    controller: controller,
    templateUrl: `app/edit-ad/edit-ad.template.html`
 });
    controller.$inject = ['adsListService'];

    function controller(adsListService) {
      const vm = this;
      
      vm.$onInit = function() {
        console.log("edit-ad controller start");
      }
    }
}());
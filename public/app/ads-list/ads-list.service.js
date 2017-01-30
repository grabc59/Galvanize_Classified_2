(function() {
    'use strict';

    angular.module('app')
        .service('adsListService', adsListService);

    adsListService.$inject = ['$http'];

    function adsListService($http) {

        this.getAds = getAds;
        this.submitAd = submitAd;
        this.getSpecificAd = getSpecificAd;
        this.patchAd = patchAd;

        function getAds() {
            return $http.get('/classifieds')
                .then(function(response) {
                    return response.data;
                });
        }

        function getSpecificAd(adId) {
            return $http.get('/classifieds/' + adId)
                .then(function(response) {
                    return response;
                });
        }

        function submitAd(newAd) {
            return $http.post('/classifieds', newAd)
                .then(function(response) {
                    return response.data;
                });
        }

      function patchAd(editAd) {
        return $http.patch('/ad/' + editAd.id, editAd)
          .then(function(response) {
            return response;
          });
      }
    }
}());
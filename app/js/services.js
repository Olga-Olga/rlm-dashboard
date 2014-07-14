'use strict';

(function () {
   var app = angular.module('rlmDashboard');

   app.service('ApiClient', function ($http, $q) {

         var qHttp = function (httpParams) {
            var deferred = $q.defer();

            $http(httpParams).success(function (data) {
               deferred.resolve(data);
            }).error(function (data) {
               deferred.reject(data);
            });

            return deferred.promise;
         };

         this.environments = function () {
            var httpParams = {
               method: 'GET',
               url: '/environments'
            };

            return qHttp(httpParams);
         };

      }
   );

})();
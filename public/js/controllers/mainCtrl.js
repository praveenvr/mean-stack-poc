/**
 * Created by prvr on 12/14/2016.
 */

(function(){
    angular.module('mainCtrl', ['LocalStorageModule'])
        .controller('mainController', function($scope, $http, nerd){
            $scope.tagline = 'to the moon and back';

            nerd.get().then( function(response){
                $scope.viewData = response.data;
            });

            $scope.deleteNerd = function(id){
                nerd.remove(id).then(function (response) {
                    $scope.message = response.status;
                    $location.path('/');
                });
            };

            $scope.updateNerd = function(id, user){
                nerd.update(id,user).then(function(response){
                    $scope.message = response.status;
                    $location.path('/');
                })
            }

        })
}())
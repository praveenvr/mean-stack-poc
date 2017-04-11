/**
 * Created by prvr on 3/17/2017.
 */

angular.module('editNerdCtrl', [])
    .controller('editNerdController', function($scope, $routeParams,nerd, $rootScope){

       var id = $routeParams.id;

        nerd.getSingleItem(id).then(function (response) {
            $scope.itemDetail = response.data;
        })

        $scope.updateNerd = function(id, nerdData){
            nerd.updateItem(id, nerdData).then(function(response){
                $rootScope.message = "Updated Successfully";
                $location.path('/');
            });
        }
    });
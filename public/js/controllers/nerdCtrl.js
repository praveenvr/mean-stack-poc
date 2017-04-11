/**
 * Created by prvr on 12/14/2016.
 */
(function(){
    angular.module('nerdCtrl', [])
        .controller('nerdController', function($scope, $http, $location, nerd){
            $scope.tagline = 'Nothing beats a pocket protector!';

            $scope.addNerds = function (user) {
                nerd.create(user).then( function(response){
                    console.log(response)
                    $location.path('/');
                });
            }


        })
}())
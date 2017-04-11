/**
 * Created by prvr on 3/19/2017.
 */

(function(){
    angular.module('recentCtrl', [])
        .controller('recentCtrl', function($scope, postServe){
            postServe.getPost().then(function (response) {
                $scope.posts = response.data;
            });
        })
}())
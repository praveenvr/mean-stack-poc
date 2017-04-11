/**
 * Created by prvr on 3/19/2017.
 */

(function () {
    angular.module('postDetailCtrl',[])
        .controller('postDetailCtrl', function($scope, $routeParams, postServe){

            var postId = $routeParams.id;
            
            postServe.getSingleItem(postId).then(function (res) {
                $scope.postDetail = res.data;
            })
        });
}());
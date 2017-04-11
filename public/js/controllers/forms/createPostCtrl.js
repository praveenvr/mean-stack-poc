/**
 * Created by prvr on 3/19/2017.
 */

(function(){
    angular.module('createPostCtrl', [])
        .controller('createPostCtrl', function($scope, $location, postServe){
            $scope.createPost = function(post){
                postServe.create(post).then(function (res) {
                    $scope.message = 'Post Created Successfully';
                    $location.path('/')
                });
            }

        })
}());
/**
 * Created by prvr on 3/17/2017.
 */

(function(){
    angular.module('postCtrl', [])
        .controller('postController', function($scope,  postServe){

            postServe.getPost().then(function (response) {
                $scope.posts = response.data;
            });
        });
}())
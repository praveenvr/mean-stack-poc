/**
 * Created by prvr on 3/19/2017.
 */

(function(){
    angular.module('categoryListCtrl', [])
        .controller('categoryListCtrl', function($scope, categoryService){
            categoryService.getCategory().then(function(res){
                $scope.categories = res.data;
            })
        })
}())
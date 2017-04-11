/**
 * Created by prvr on 3/18/2017.
 */

angular.module('createCategoryCtrl',[])
    .controller('createCategoryCtrl', function($scope, $location, categoryService){
        $scope.createCategory = function(category){
            categoryService.create(category).then(function(res){
                $scope.message = 'Category Created Successfully';
            });
        };
    });
/**
 * Created by prvr on 03/17/2017.
 */

(function(){
    angular.module('categoryService', [])
        .factory('categoryService',['$http', function($http){

            return{
                getCategory: function(){
                    return $http.get('/api/category');
                },
                create: function(categoryData){
                    return $http.post('/api/category', categoryData);
                },
                getSingleCategory: function(id){
                    return $http.get('/api/category/'+id);
                },
                remove: function(id){
                    return $http.delete('/api/category/'+id);
                },
                updateCategory: function(id,categoryData){
                    return $http.put('/api/category/'+id, categoryData);
                }
            }
        }]);
}())
/**
 * Created by prvr on 03/17/2017.
 */

(function(){
    angular.module('postService', [])
        .factory('postServe',['$http', function($http){

            return{
                getPost: function(){
                    return $http.get('/api/posts');
                },
                create: function(postData){
                    return $http.post('/api/posts', postData);
                },
                getSingleItem: function(id){
                    return $http.get('/api/posts/'+id);
                },
                remove: function(id){
                    return $http.delete('/api/posts/'+id);
                },
                updateItem: function(id,postData){
                    return $http.put('/api/posts/'+id, postData);
                }
            }
        }]);
}())
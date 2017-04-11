/**
 * Created by prvr on 12/14/2016.
 */


(function(){
    angular.module('nerdService', [])
        .factory('nerd',['$http', function($http){

            return{
                get: function(){
                    return $http.get('/api/bears');
                },
                create: function(nerdData){
                    return $http.post('/api/bears', nerdData);
                },
                getSingleItem: function(id){
                    return $http.get('/api/bears/'+id);
                },
                remove: function(id){
                    return $http.delete('/api/bears/'+id);
                },
                updateItem: function(id,nerdData){
                    return $http.put('/api/bears/'+id, nerdData);
                }
            }
        }]);
}())
/**
 * Created by prvr on 3/18/2017.
 */

(function(){
    angular.module('userService', [])
        .factory('userService',['$http', function($http){

            return{
                get: function(){
                    return $http.get('/api/users');
                },
                create: function(userData){
                    return $http.post('/api/users', userData);
                },
                getSingleUser: function(user){
                    return $http.get('/api/user/'+user.email+'/'+user.password);
                },
                remove: function(id){
                    return $http.delete('/api/user/'+id);
                },
                updateUser: function(id,userData){
                    return $http.put('/api/user/'+id, userData);
                }
            }
        }]);
}())
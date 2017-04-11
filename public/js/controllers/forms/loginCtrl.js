/**
 * Created by prvr on 3/18/2017.
 */

angular.module('loginCtrl',[])
    .controller('loginCtrl', function ($scope, $rootScope, $location, userService, localStorageService) {

        $scope.loginUser = function(user){
            userService.getSingleUser(user).then(function (res) {
                if(res.data != null){
                    if(localStorageService.isSupported) {
                        localStorageService.set('userData',res.data);
                        localStorageService.remove('userData.password');

                        localStorageService.set('isAuthenticated', true);
                        if(localStorageService.get('isAuthenticated'))
                            $location.path('/');
                    }
                }else{
                    $scope.message = {
                        error:'invalid Login'
                    }
                }
            });

        };

    });
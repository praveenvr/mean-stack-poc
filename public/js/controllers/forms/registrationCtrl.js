/**
 * Created by prvr on 3/18/2017.
 */

angular.module('registrationCtrl',[])
    .controller('registrationCtrl', function ($scope, $rootScope, $location, userService) {
        $rootScope.isUserCreated = false;
        $scope.regUser = function(user){
            if(user.password == user.cpassword){
                userService.create(user).then(function (res) {
                    $scope.message = 'User Created Successfully';
                    $rootScope.isUserCreated = true;
                    $location.path('/signin')
                });
            }
            else{
                $rootScope.message = {
                    error:'Password not matching, Please enter valid password'
                }
            }
        }

    });
/**
 * Created by prvr on 3/18/2017.
 */

angular.module('registrationCtrl',[])
    .controller('registrationCtrl', function ($scope, $rootScope, $location, registration) {
        $rootScope.isUserCreated = false;
        $scope.regUser = function(user){
            registration.create(user).then(function (res) {
                $scope.message = 'User Created Successfully';
                $rootScope.isUserCreated = true;
            })
        }
        if($rootScope.isUserCreated)
            $location.path('/login')
    });
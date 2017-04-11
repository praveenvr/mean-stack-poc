/**
 * Created by prvr on 3/17/2017.
 */

(function(){
    angular.module('headerCtrl',[])
        .controller('headerCtrl', function ($scope, $route, $rootScope, localStorageService, $location, categoryService) {

            if(localStorageService.isSupported) {
                $scope.$watch(function(){
                    console.log('watch called');
                    $rootScope.isAuthenticated = localStorageService.get('isAuthenticated');
                    $rootScope.userData = localStorageService.get('userData');
                });
            }

            $rootScope.$on('$routeChangeStart', function (event, next) {
                if($rootScope.isAuthenticated && !next.isLogin){
                    $rootScope.savedLocation = $location.url();
                    $location.path('/');
                }
            });

            $scope.logOut = function () {
                if(localStorageService.isSupported) {
                    $rootScope.isAuthenticated =  localStorageService.set('isAuthenticated', false)
                    localStorageService.remove('userData');
                    $location.path('/')
                }
            };

            categoryService.getCategory().then(function (res) {
                $scope.categories = res.data;
            })


        })
}());

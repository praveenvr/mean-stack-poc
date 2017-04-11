/**
 * Created by prvr on 12/14/2016.
 */

(function(){
    angular.module('appRoutes',[])
        .config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
            $routeProvider
                .when('/',{
                    templateUrl:'views/blog/front_page.html',
                    controller:'postController',
                    isLogin: false
                })
                .when('/nerd', {
                    templateUrl:'views/nerd.html',
                    controller:'nerdController',
                    isLogin: true
                })
                .when('/edit/:id', {
                    templateUrl:'../views/edit_nerd.html',
                    controller:'editNerdController',
                    isLogin: false
                })
                .when('/registration',{
                    templateUrl:'views/forms/user_registration.html',
                    controller:'registrationCtrl',
                    isLogin: false
                })
                .when('/signin',{
                    templateUrl:'views/forms/login.html',
                    controller:'loginCtrl',
                    isLogin: false
                })
                .when('/add-category',{
                    templateUrl:'views/forms/add_category.html',
                    controller:'createCategoryCtrl',
                    isLogin: true
                })
                .when('/add-post',{
                    templateUrl:'views/forms/post.html',
                    controller:'createPostCtrl',
                    isLogin: true
                })
                .when('/posts/:id',{
                    templateUrl:'../views/blog/post_detail.html',
                    controller:'postDetailCtrl',
                    isLogin:true
                })

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }]);
}())
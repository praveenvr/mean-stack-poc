/**
 * Created by prvr on 12/14/2016.
 */

var app = angular.module('meanApp',[
    'ngRoute',
    'ngCookies',
    'ngAnimate',
    'ngMessages',
    'LocalStorageModule',
    'appRoutes',
    'headerCtrl',
    'mainCtrl',
    'nerdCtrl',
    'postCtrl',
    'postDetailCtrl',
    'createPostCtrl',
    'createCategoryCtrl',
    'categoryListCtrl',
    'registrationCtrl',
    'loginCtrl',
    'recentCtrl',
    'nerdService',
    'postService',
    'userService',
    'categoryService'
]);

app.config( function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('meanApp')
        .setStorageType('sessionStorage')
        .setDefaultToCookie(false)
        .setNotify(true, true);
});
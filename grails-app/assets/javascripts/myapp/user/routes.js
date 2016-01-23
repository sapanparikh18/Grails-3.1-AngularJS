/**
 * Created by sapanp on 20-01-2016.
 */
var context = "/assets/myapp";
var myapp = angular.module('myapp.user');
myapp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/user', {
            templateUrl: context+'/user/templates/user.tpl.html',
            controller: "UserListController as ctrl"
        }).
        when('/user/:userId', {
            templateUrl: context+'/user/templates/show.tpl.html',
            controller: "UserShowController as ctrl"
        }).
        otherwise({
            templateUrl: 'templates/404.html'
        });
    }]);
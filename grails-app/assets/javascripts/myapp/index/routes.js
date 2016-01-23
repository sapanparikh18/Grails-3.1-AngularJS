/**
 * Created by sapanp on 20-01-2016.
 */
var myapp = angular.module('myapp.index');
var context = "/assets/myapp"
myapp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/index', {
            templateUrl: context+'/index/templates/applicationData.tpl.html',
            controller: 'IndexController as vm'
        }).
        otherwise({
            redirectTo: 'templates/404.html'
        });
    }]);
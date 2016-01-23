//= wrapped
angular.module('myapp.index')
    .config(function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/myapp/index/applicationData.html',
            controller: 'IndexController as vm'
        })
    });
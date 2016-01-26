//= wrapped

angular.module("myapp.user")
    .config(function($routeProvider) {
        $routeProvider.
        when('/user', {
            templateUrl: "/myapp/user/user.html",
            controller: "UserListController as ctrl"
        }).
        when('/user/create', {
            templateUrl: "/myapp/user/create.html",
            controller: "UserCreateController as ctrl"
        }).
        when('/user/edit/:userId', {
            templateUrl: "/myapp/user/create.html",
            controller: "UserCreateController as ctrl"
        }).
        when('/user/:userId', {
            templateUrl: "/myapp/user/show.html",
            controller: "UserShowController as ctrl"
        })
    });
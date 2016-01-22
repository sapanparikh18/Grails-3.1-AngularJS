//= wrapped
//= require /angular/angular
//= require /angular/angular-route
//= require /myapp/core/core
//= require /myapp/index/index
//= require /myapp/user/user

angular.module("myapp", [
    "ngRoute",
    "myapp.core",
    "myapp.index",
    "myapp.user"
]);

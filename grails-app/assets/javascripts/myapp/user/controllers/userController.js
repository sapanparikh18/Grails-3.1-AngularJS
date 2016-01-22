//= wrapped

angular
    .module("myapp.user")
    .controller("UserListController", ['userDataFactoryService',UserListController])
    .controller("UserShowController", ['userDataFactoryService','$routeParams',UserShowController])

function UserListController(userService) {

    var self = this;
    userService.list(function(items){
        self.users = items;
        ;});

}
function UserShowController(userService,$routeParams){
    var self = this;
    userService.show({userId:1,action:'show'},function(user){
        self.user = user;
        ;});
}
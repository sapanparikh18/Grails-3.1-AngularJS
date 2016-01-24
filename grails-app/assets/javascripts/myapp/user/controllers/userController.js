//= wrapped

angular
    .module("myapp.user")
    .controller("UserListController", ['userDataFactoryService',UserListController])
    .controller("UserShowController", ['userDataFactoryService','$routeParams',UserShowController])
    .controller("UserCreateController", ['userDataFactoryService','$routeParams',UserCreateController])

function UserListController(userService) {

    var self = this;
    userService.list(function(items){
        self.users = items;
    });

}
function UserShowController(userService){
    var self = this;
    userService.show({userId:1,action:'show'},function(user){
        self.user = user;
    });
}
function UserCreateController(userService){
    var self = this;
    // TODO implement user service code
}

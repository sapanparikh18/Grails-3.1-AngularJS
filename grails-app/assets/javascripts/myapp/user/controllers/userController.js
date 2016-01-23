//= wrapped

angular
    .module("myapp.user")
    .controller("UserListController", UserListController)
    .controller("UserShowController", UserShowController);

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
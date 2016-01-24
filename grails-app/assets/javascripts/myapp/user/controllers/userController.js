//= wrapped

angular
    .module("myapp.user")
    .controller("UserListController", ['userDataFactoryService',UserListController])
    .controller("UserShowController", ['userDataFactoryService','$routeParams',UserShowController])
    .controller("UserCreateController", ['userDataFactoryService',UserCreateController])

function UserListController(userService) {

    var self = this;
    userService.list(function(items){
        self.users = items;
    });

}
function UserShowController(userService,$routeParams){
    var self = this;
    userService.show({userId:$routeParams.userId,action:'show'},function(user){
        self.user = user;
    });
}
function UserCreateController(userService){
    var self = this;
    self.save = function(user){
        //console.log(userService.update);
        userService.update({action:'update'},user,function(res){
            console.log(res);
        })
    }
}

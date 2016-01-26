//= wrapped

angular
    .module("myapp.user")
    .controller("UserListController", ['userDataFactoryService',UserListController])
    .controller("UserShowController", ['userDataFactoryService','$routeParams','$location',UserShowController])
    .controller("UserCreateController", ['userDataFactoryService','$routeParams','$location',UserCreateController])
function UserListController(userService) {

    var self = this;
    userService.list(function(items){
        self.users = items;
    });

}
function UserShowController(userService,$routeParams,$location){
    var self = this;
    userService.show({userId:$routeParams.userId,action:'show'},function(user){
        self.user = user;
    });
    self.delete = function(user){
        if(confirm("Are you sure you want to delete this user?")) {
            userService.delete({action: 'delete',userId:$routeParams.userId}, user, function (res) {
                $location.path("/user/");

            })
        }
    }
}

function UserCreateController(userService,$routeParams,$location){
    var self = this;
    if($routeParams.userId){
        userService.show({userId:$routeParams.userId,action:'show'},function(user){
            self.user = user;
        });
    }
    self.save = function(user){
        user.dob = null;
        userService.save({action:'save'},user,function(res){
            if(res.id){
                $location.path("/user/"+res.id);
            }else{
                alert("Unknown error occured");
            }
        })
    }
}

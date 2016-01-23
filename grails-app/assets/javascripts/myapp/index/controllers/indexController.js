//= wrapped

angular
    .module("myapp.index")
    .controller("IndexController", ctrl);

function ctrl(applicationDataFactory, contextPath) {
    var vm = this;
    vm.contextPath = contextPath;
    applicationDataFactory.get().then(function(response) {
        vm.applicationData = response.data;
        vm.msg= 'Yo!!!';
    });
}

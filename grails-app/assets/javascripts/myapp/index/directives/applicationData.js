//= wrapped

angular
    .module("myapp.index")
    .directive("applicationData", applicationData);

function applicationData() {
    var directive = {
        restrict: "E",
        templateUrl: "/myapp/index/applicationData.html",
        controller: "IndexController",
        controllerAs: "vm",
        transclude: true,
        scope: {},
        bindToController: {
        }
    };

    return directive;
}

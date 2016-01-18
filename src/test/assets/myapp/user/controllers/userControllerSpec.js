describe("myapp.user module", function() {
    var scope;

    beforeEach(angular.mock.module("myapp.user", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("UserController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("UserController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});

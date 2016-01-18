describe("myapp.user module", function() {

    beforeEach(angular.mock.module("myapp.user", function() {
    }));

    describe("userDataFactoryService", function() {

        var userDataFactoryService;

        beforeEach(angular.mock.inject(function(_userDataFactoryService_) {
            userDataFactoryService = _userDataFactoryService_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});

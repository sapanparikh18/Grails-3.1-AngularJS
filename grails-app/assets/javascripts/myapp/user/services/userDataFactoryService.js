//= wrapped

angular
    .module("myapp.user")
    .factory("userDataFactoryService", userDataFactoryService);

function userDataFactoryService(DomainServiceFactory) {
    return DomainServiceFactory('/user/:action/:userId',{userId:'@id',action:'@action'},
        {"show": {method: "GET"}},
        {"save": {method: "POST"}},
        {"delete": {method: "DELETE"}}
    );
}
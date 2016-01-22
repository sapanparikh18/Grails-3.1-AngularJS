//= wrapped
//= require /myapp/core/services/DomainServiceFactory
angular
    .module("myapp.user")
    .factory("userDataFactoryService", ['DomainServiceFactory',userDataFactoryService]);

function userDataFactoryService(DomainServiceFactory) {
    return  DomainServiceFactory('/user/:action/:userId',{userId:'@id',action:'@action'},{"show": {method: "GET"}})

    /*return function() {

    };*/
}
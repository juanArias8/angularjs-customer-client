/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('customerApp.services',[]).factory('Customer',function($resource){
    return $resource('http://localhost:8080/ClienteBackend/webresources/com.edu.udea.clientebackend.entity.cliente/:id',{id:'@id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    };
});
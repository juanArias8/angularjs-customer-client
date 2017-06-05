/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('customerApp',['ui.router','ngResource','customerApp.controllers','customerApp.services']);

angular.module('customerApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('customers',{
        url:'/customers',
        templateUrl:'partials/customers.html',
        controller:'CustomerListController'
    }).state('viewCustomer',{
       url:'/customers/:id/view',
       templateUrl:'partials/customer-view.html',
       controller:'CustomerViewController'
    }).state('newCustomer',{
        url:'/customers/new',
        templateUrl:'partials/customer-add.html',
        controller:'CustomerCreateController'
    }).state('editCustomer',{
        url:'/customers/:id/edit',
        templateUrl:'partials/customer-edit.html',
        controller:'CustomerEditController'
    });
}).run(function($state){
   $state.go('customers');
});
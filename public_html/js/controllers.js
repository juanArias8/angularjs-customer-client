/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('customerApp.controllers',[]).controller('CustomerListController',function($scope,$state,popupService,$window,Customer){

    $scope.customers=Customer.query();

    $scope.deleteCustomer=function(customer){
        if(popupService.showPopup('¿Está seguro de que desea eliminar este cliente?')){
            customer.$delete(function(){
                $window.location.href='';
            });
        }
    };

}).controller('CustomerViewController',function($scope,$stateParams,Customer){

    $scope.customer=Customer.get({id:$stateParams.id});

}).controller('CustomerCreateController',function($scope,$state,$stateParams,Customer){

    $scope.customer=new Customer();

    $scope.addCustomer=function(){
        $scope.customer.$update(function(){
            $state.go('customers');
        });
    };

}).controller('CustomerEditController',function($scope,$state,$stateParams,Customer){

    $scope.updateCustomer=function(){
        $scope.customer.$update(function(){
            $state.go('customers');
        });
    };

    $scope.loadCustomer=function(){
        $scope.customer=Customer.get({id:$stateParams.id});
    };

    $scope.loadCustomer();
});
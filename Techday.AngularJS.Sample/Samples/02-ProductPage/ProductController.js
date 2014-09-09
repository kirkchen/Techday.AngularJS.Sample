var app = angular.module('app', ['ui.bootstrap', 'ui.bootstrap.tpls']);

app.controller('ProductController',
    function ($scope, ProductDataService) {

        $scope.products = [];

        ProductDataService.getProducts()
            .then(function (data) {                
                $scope.products = data;                
            });
    });
// Code goes here
var app = angular.module('App', ['ngTable'])
.controller('AppCtrl', function($scope, $filter, $q, NgTableParams) {
  var  data = [{"id":0,"vinNum":"blank-vin-num","manufacturer":"200","model":"BIKE","bodyType":"Cycle","yearOfVehicle":"2006","stockNum":"11101","colorExt":"GREEN","mileage":"1","dateEntered":"08/08/2007"},{"id":1,"vinNum":"blank-vin-num 1","manufacturer":"300","model":"BIKE 1","bodyType":"Cycle 1","yearOfVehicle":"2007","stockNum":"11101","colorExt":"GREEN","mileage":"1","dateEntered":"08/08/2007"},{"id":2,"vinNum":"blank-vin-num 2","manufacturer":"400","model":"BIKE 2","bodyType":"Cycle 2","yearOfVehicle":"2008","stockNum":"11101","colorExt":"GREEN","mileage":"1","dateEntered":"08/08/2007"},{"id":3,"vinNum":"blank-vin-num 3","manufacturer":"500","model":"BIKE 3","bodyType":"Cycle 3","yearOfVehicle":"2009","stockNum":"11101","colorExt":"GREEN","mileage":"1","dateEntered":"08/08/2007"                    } ];
  $scope.tableParams = new NgTableParams({page: 1, count: 10}, {data: data});
  
})
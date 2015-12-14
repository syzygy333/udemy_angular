// option 1
// app.controller('CustomersController', function($scope) {
//   $scope.sortBy = 'name';
//   $scope.reverse = false;
//
//   $scope.customers = [
//     {name:'Brian', city:'North Smithfield'},
//     {name:'Kristen', city:'Gardner'},
//     {name:'J', city:'North Smithfield'},
//     {name:'Beth', city:'Providence'}
//   ];
//   $scope.doSort = function(propName) {
//     $scope.sortBy = propName;
//     $scope.reverse = !$scope.reverse;
//   };
// });

// // option 2
// (function() {
//   angular.module('customersApp')
//     .controller('CustomersController', function($scope) {
//       $scope.sortBy = 'name';
//       $scope.reverse = false;
//
//       $scope.customers = [
//         {name:'Brian', city:'North Smithfield'},
//         {name:'Kristen', city:'Gardner'},
//         {name:'J', city:'North Smithfield'},
//         {name:'Beth', city:'Providence'}
//       ];
//       $scope.doSort = function(propName) {
//         $scope.sortBy = propName;
//         $scope.reverse = !$scope.reverse;
//       };
//   });
// }());
//
// // option 3
(function() {
  var CustomersController = function($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;

    $scope.doSort = function(propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  CustomersController.$inject = ['$scope'];

  angular.module('customersApp')
    .controller('CustomersController', CustomersController);
}());

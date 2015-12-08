function CustomersController($scope) {
  $scope.sortBy = 'name';
  $scope.reverse = false;

  $scope.customers = [{name:'Brian', city:'North Smithfield'}, {name:'Kristen', city:'Gardner'}, {name:'J', city:'North Smithfield'}, {name:'Beth', city:'Providence'}];
  $scope.doSort = function(propName) {
    $scope.sortBy = propName;
    $scope.reverse = !$scope.reverse;
  };
}

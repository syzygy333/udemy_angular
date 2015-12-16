angular.module('customersApp').value('appSettings', {
  title: 'Customers Application',
  version: '1.0'
});

// same as above, except this one can be injected into config

// angular.module('customersApp').constant('appSettings', {
//   title: 'Customers Application',
//   version: '1.0'
// });

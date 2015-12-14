(function() {
  var customerFactory = function() {
    var customers = [
      {
        id: 1,
        joined: '1979-06-08',
        name:'Brian',
        city:'North Smithfield',
        orders: [
          {
            id: 1,
            product: 'Shoes',
            total: 9.9956
          }
        ]
      },
      {
        id: 2,
        joined: '1986-06-07',
        name:'Kristen',
        city:'Gardner'
        orders: [
          {
            id: 2,
            product: 'Baseball',
            total: 9.995
          },
          {
            id: 3,
            product: 'Bat',
            total: 9.995
          }
        ]
      },
      {
        id: 3,
        joined: 1975-09-17,
        name:'J',
        city:'North Smithfield'
        orders: [
          {
            id: 4,
            product: 'Headphones',
            total: 44.99
          }
        ]
      },
      {
        id: 5,
        joined: 1984-02-22,
        name:'Beth',
        city:'Providence',
        orders: [
          {
            id: 5,
            product: 'Kindle',
            total: 101.50
          }
        ]
      }
    ];
    var factory = {};
    factory.getCustomers = function() {
      return customers;
    };
    return factory;
  };
  angular.module('customersApp').factory('customersFactory', customerFactory);
}());

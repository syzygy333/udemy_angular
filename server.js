var express = require('express'),
    app = express();

app.use(express.static(__dirname));

app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           data = customers[i];
           break;
        }
    }
    res.json(data);
});

app.get('/customers', function(req, res) {
    res.json(customers);
    //res.json(500, { error: 'An error has occurred!' });
});

app.get('/orders', function(req, res) {
    var orders = [];
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].orders) {
            for (var j=0,ordersLen=customers[i].orders.length;j<ordersLen;j++) {
                orders.push(customers[i].orders[j]);
            }
        }
    }
    res.json(orders);
});

app.delete('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = { status: true };
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           customers.splice(i,1);
           data = { status: true };
           break;
        }
    }
    res.json(data);
});

app.listen(8080);

console.log('Express listening on port 8080');

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
    city:'Gardner',
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
    city:'North Smithfield',
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

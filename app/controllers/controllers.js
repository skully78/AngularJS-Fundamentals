app.controller('CustomersController', function ($scope, customersService) {

    init();

    function init() {
        //console.log('CustomersController');
        $scope.customers = customersService.getCustomers();
    }

    $scope.insertCustomer = function () {
        let firstName = $scope.newCustomer.firstName;
        let lastName = $scope.newCustomer.lastName;
        let city = $scope.newCustomer.city;
        customersService.insertCustomer(firstName, lastName, city);
        $scope.newCustomer.firstName = '';
        $scope.newCustomer.lastName = '';
        $scope.newCustomer.city = '';
    }

    $scope.deleteCustomer = function (id) {
        //console.log(id);
        customersService.deleteCustomer(id);
    }
});

app.controller('CustomerOrdersController', function ($scope, $routeParams, customersService) {

    $scope.customer = {};
    $scope.ordersTotal = 0.00;

    init();

    function init() {
        //console.log('CustomerOrdersController');
        //Grab customerID off of the route  

        let customerID = ($routeParams.customerID) ? parseInt($routeParams.customerID) : 0;

        if (customerID > 0) {
            $scope.customer = customersService.getSingleCustomer(customerID);
        }

    }

});

app.controller('OrdersController', function ($scope, customersService) {

    init();

    function init() {
        //console.log('OrdersController');
        $scope.customers = customersService.getCustomers();
    }

});

//This controller is a child controller that will inherit functionality from a parent
//It's used to track the orderby parameter and ordersTotal for a customer. Put it here rather than duplicating 
//setOrder and orderby across multiple controllers.
app.controller('OrderChildController', function ($scope) {

    $scope.orderby = 'product';
    $scope.reverse = false;
    $scope.ordersTotal = 0.00;

    init();

    function init() {
        //console.log('OrderChildController');

        //Calculate grand total
        //Handled at this level so we don't duplicate it across parent controllers

        if ($scope.customer && $scope.customer.orders) {
            let total = 0.00;
            for (let index = 0; index < $scope.customer.orders.length; index++) {
                let order = $scope.customer.orders[index];
                total += order.orderTotal;
            }
            $scope.ordersTotal = total;
        }

    }

    $scope.setOrder = function (orderby) {
        if (orderby = $scope.orderby) {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    }

});
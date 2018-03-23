app.controller('CustomersController', function ($scope, customersService) {

    init();

    function init() {
        console.log('CustomersController');
        $scope.customers = customersService.getCustomers();
    }
});

app.controller('OrdersController', function ($scope, customersService) {

    init();

    function init() {
        console.log('OrdersController');
        $scope.customers = customersService.getCustomers();
    }

});

//This controller is a child controller that will inherit functionality from a parent
//It's used to track the orderby parameter and ordersTotal for a customer. Put it here rather than duplicating 
//setOrder and orderby across multiple controllers.
app.controller('OrderChildController', function ($scope) {

    $scope.ordersTotal = 0.00;

    init();

    function init() {
        //console.log('OrderChildController');

        //Calculate grand total
        //Handled at this level so we don't duplicate it across parent controllers

        if ($scope.customer && $scope.customer.orders) {
            let total = 0.00;
            for (let index = 0; index < $scope.customer.orders; index++) {
                let order = $scope.customer.orders[index];
                total += order.ordersTotal;
            }
            $scope.ordersTotal = total;
        }

    }

});
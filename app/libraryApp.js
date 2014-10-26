var libraryApp = angular.module('libraryApp' , []);

libraryApp.controller('libraryController',['$scope', '$http', function($scope, $http) {


//Call Symfony show action to return JSON object with books
    $scope.load=function(){
        $http.get('http://localhost:8000/app_dev.php/show').
            success(function (data, status, headers, config) {
                $scope.books = data;
                console.log(data);
            }).
            error(function (data, status, headers, config) {
                console.log("error")
            });
    }

    $scope.load();


//Create book
    $scope.createBook = function() {
        $http({
            method: 'POST',
            url: 'http://localhost:8000/app_dev.php/create',
            data: $scope.formData,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}  // set the headers so angular passing info as form data (not request payload)
        }).success(function(data) {
            console.log(data);
            $scope.load();
            $scope.formData = {};
        })
    };


//Delete book
    $scope.deleteBook= function(id) {
        $http({
            method: 'DELETE',
            url: 'http://localhost:8000/app_dev.php/delete/' + id
        });
        $scope.load();

    };

////Update book
//PROBLEM: Only works as POST, not as PUT
$scope.updateBook = function(book) {
    console.log(book);
    $http({
        method: 'POST',
        url: 'http://localhost:8000/app_dev.php/update/'+book.id,
        data: book,
        headers: {"Content-Type": "application/x-www-form-urlencoded"}  // set the headers so angular passing info as form data (not request payload)
    });
    $scope.load();

};

    $scope.searchField='';
//Total Quantity
   $scope.totalQuantity=function() {
       $scope.tquantity = 0;

       console.log($scope.searchField);

       var searchQuery = $scope.searchField;

       for (var i in $scope.books) {
           $scope.tquantity += $scope.books[i]["quantity"];
       }
       return $scope.tquantity;

   };


 //Total Price
    $scope.totalPrice=function(){
        $scope.tprice=0;
        for (var i in $scope.books) {
            $scope.tprice += ($scope.books[i]["price"]* $scope.books[i]["quantity"]);
        }
        return $scope.tprice;
    }


}]);








var libraryApp = angular.module('libraryApp' , []);

libraryApp.controller('libraryController',['$scope', '$http', function($scope, $http) {


//Call Symfony show action to return JSON object with books
//    $scope.refreshBooks = function () {
    $http.get('http://localhost:8000/app_dev.php/show').
        success(function (data, status, headers, config) {
            $scope.books = data;
            console.log(data);
        }).
        error(function (data, status, headers, config) {
            console.log("error")
        });



//
//    ////   //Create book
    $scope.createBook = function() {
        $http({
            method: 'POST',
            url: 'http://localhost:8000/app_dev.php/create',
            data: $scope.formData,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}  // set the headers so angular passing info as form data (not request payload)
        }).success(function(data) {
                console.log(data);
                $scope.books.push(data);
                $scope.formData={};
                //$scope.refresh();

            });
    };
}


        //$scope.books.push(
        //    {
        //        title: formData.title,
        //        author: formData.author,
        //        price: formData.price,
        //        quantity: formData.quantity
        //    })
    //    $scope.formData={}; //clear form data
    //}








 //   //Delete book
 //   $scope.deleteBook=function($index){
 //       $scope.books.splice($index, 1);
 //   }
 //
 //
 //   //Update book...This method isn't really necessary since aren't storing value..just wrote for practice
 //   $scope.updateBook=function(book, $index) {
 //       $scope.books[$index] = {
 //           title: book.title,
 //           author: book.author,
 //           price: book.price,
 //           quantity: book.quantity
 //       }
 //       return $scope.books;
 //   }
 //
 //
 //// $scope.searchField='';
 //
 //   //Total Quantity
 //   $scope.totalQuantity=function(){
 //       $scope.tquantity=0;
 //
 //       console.log($scope.searchField);
 //
 //       var searchQuery=$scope.searchField;
 //
 //           for (var i in $scope.books) {
 //               $scope.tquantity += $scope.books[i]["quantity"];
 //           }
 //           return $scope.tquantity;






    //WHY ISN'T THIS WORKING AND HOW CAN I WRITE IT BETTER? Right now just am hiding total price
        // and total quantity if there's a searchField but I want totalPrice and totalQuantity
        //to update based on searchField

        //if ($scope.searchField == undefined || $scope.searchField =='') {
        //    for (var i in $scope.books) {
        //        $scope.tquantity += $scope.books[i]["quantity"];
        //    }
        //    return $scope.tquantity;
        //}else {
        //    for (var i in $scope.books) {
        //        for (var prop in $scope.books[i]) {
        //            if ($scope.books[i][prop]==searchQuery {
        //                $scope.tquantity += $scope.books[i]["quantity"];
        //            }
        //        }
        //    }
        //    return $scope.tquantity;
        //
        //}




//
//};
//
//
//    //Total Price
//    $scope.totalPrice=function(){
//        $scope.tprice=0;
//        for (var i in $scope.books) {
//            $scope.tprice += ($scope.books[i]["price"]* $scope.books[i]["quantity"]);
//        }
//        return $scope.tprice;
//    }

])
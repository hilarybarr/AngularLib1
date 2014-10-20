
//WHEN TO USE VAR VS SCOPE


var libraryApp = angular.module('libraryApp' , []);

libraryApp.controller('libraryController',function($scope) {


   //Initially populate books array
   $scope.books=[
        {
            title: "Harry Potter",
            author: "JK Rowling",
            price: 5,
            quantity: 2
        },
        {
            title: "Jokebook",
            author: "Me",
            price: 3,
            quantity: 1
        }

    ];


    //Create book
    $scope.createBook=function(formData){
        $scope.books.push(
            {
                title: formData.title,
                author: formData.author,
                price: formData.price,
                quantity: formData.quantity
            })
        $scope.formData={}; //clear form data
    }


    //Delete book
    $scope.deleteBook=function($index){
        $scope.books.splice($index, 1);
    }


    //Update book...This method isn't really necessary since aren't storing value..just wrote for practice
    $scope.updateBook=function(book, $index) {
        $scope.books[$index] = {
            title: book.title,
            author: book.author,
            price: book.price,
            quantity: book.quantity
        }

    }


    //Total Quantity
    $scope.totalQuantity=function(){
        $scope.tquantity=0;
        for (var i in $scope.books) {
            $scope.tquantity += $scope.books[i]["quantity"];
        }
        return $scope.tquantity;
    }


    //Total Price
    $scope.totalPrice=function(){
        $scope.tprice=0;
        for (var i in $scope.books) {
            $scope.tprice += ($scope.books[i]["price"]* $scope.books[i]["quantity"]);
        }
        return $scope.tprice;
    }

});
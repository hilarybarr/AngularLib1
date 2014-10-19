//Controller
// CREATE ==================================================================
// when submitting the add form, send the text to the node API
$scope.createBook = function() {
   $scope.loading = true;

   // validate the formData to make sure that something is there
   // if form is empty, nothing will happen
   if ($scope.formData.title != undefined) {

      // call the create function from our service (returns a promise object)
      Books.create($scope.formData)

         // if successful creation, call our get function to get all the new books
         .success(function(data) {
            $scope.loading = false;
            $scope.formData = {}; // clear the form so our user is ready to enter another
            $scope.books = data; // assign our new list of books
         });
   }
};

//Routes
 //app.put('/api/books/:book_id', function(req, res) {
          //
          //    // create a book, information comes from AJAX request from Angular
          //    Book.update({
          //        title : req.body.title,
          //        author : req.body.author,
          //        price : req.body.price,
          //        quantity : req.body.quantity,
          //        done : false
          //    }, function(err, book) {
          //        if (err)
          //            res.send(err);
          //
          //        // get and return all the books after you create another
          //        Book.find(function(err, books) {
          //            if (err)
          //                res.send(err)
          //            res.json(books);
          //        });
          //    });
          //
          //});



  //Service

         //   update : function(id) {
                   //       return $http.put('/api/books/' + id);
                   //   }
                  //
         //}

